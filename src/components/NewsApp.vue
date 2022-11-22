<script setup>  
     

    import { ref, onMounted} from 'vue'
    import PosteosApp from './PosteosApp.vue'
    import Modal from './Modal.vue';
    
    
    const posteos = ref([])
    onMounted(async () => {
         await fetch('https://jsonplaceholder.typicode.com/posts')
         .then(res => res.json())
         .then(data => {
                posteos.value= data
                console.log(posteos.value);
                
            })
         })
         
 
    
</script>

<template>
    <main class="d-flex flex-column align-items-center">
    
        <div class="d-flex flex-column align-items-center gap-3">
            <input type="search" name="" id="search">
            <div>

                <button class="btn btn-more">New post <font-awesome-icon icon="fa-regular fa-pen-to-square" /></button>
            </div>
    
        </div>
        <div>
            <h1>News App</h1>
        </div>
        <div class="post-container d-flex gap-2 flex-wrap justify-content-center">
           
            <PosteosApp v-for="post in posteos" :post="post" :key="post.id" />
        </div>
    
        

     </main>
</template>

<style scoped>
#search{
        width:clamp(250px, 50vw, 600px) !important;
        height: clamp(30px, 40px, 50px);
        border: 1px solid #ccc;
        border-radius: 20px;
        padding: 0 10px;
        background: rgba(255, 255, 255, 0.11);
        color: var(--color-text-ligth);

    }
    .icon{
        color: #191919;
        position: absolute;
        width: 20px;
        height: 20px;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
    }
    button{
        width: 10rem !important;
    }
    button svg, button{
        font-size: 1.2rem;
    }
    
</style>