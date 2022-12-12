<script setup>  
     
    import {ref} from 'vue'
    import PosteosApp from './PosteosApp.vue'
    import  {addPost, posts} from '../firebase/post.js'
    
    const textoPost = ref('')

   

    const addNewPost = (id) => {
    const newPost = {
        id: crypto.randomUUID(),
        body: textoPost.value,
        save: false,
    }
    console.log(newPost);
    addPost(newPost)
    textoPost.value = ''
    console.log(posts.value)
 
    
}
    



// const subirPost = () => {
//     console.log('Hola');
//       const post={
//         id: crypto.randomUUID(),
//         body: textoPost.value,
//         save: false
//       }
//         posteosSaved.value.unshift(post)
//         console.log(posteosSaved.value);
//         textoPost.value= ''
// }


         
 
    
</script>

<template>
    <main class="d-flex flex-column align-items-center">
        
        
        <div class="d-flex flex-column align-items-center mb-5">
            <!-- <input type="search" name="" id="search">
                <div>
                
                    <button class="btn btn-more">New post <font-awesome-icon icon="fa-regular fa-pen-to-square" /></button>
                </div> -->
            <form @submit.prevent="addNewPost">
                <div class="post-creat d-flex flex-column gap-2 mt-3 align-items-center">
                    <textarea v-model="textoPost" maxlength="150" placeholder="Escribi algo a ver" name="" id="" cols="30"
                        rows="2"></textarea>
                </div>
                <button :disabled="!textoPost" type="submit" class="btn btn-more mt-2">
                    Post  <font-awesome-icon icon="fa-regular fa-pen-to-square" />
                </button>
            </form>
    
        </div>
    
        <!-- <div class="post-container d-flex gap-2 flex-wrap justify-content-center">
                <PosteosApp v-for="post in posteos" :post="post" :key="post.id" />
            </div> -->
    
        <div v-if="posts.length != 0"
            class="contenedor post-container d-flex gap-2 flex-wrap align-items-center justify-content-center mt-3">
             
            <PosteosApp v-for="post in posts" :post="post" :key="post.id" :arrayP="post" />
    
        </div>
    
        <div v-else class="nothing d-flex flex-column gap-2 mt-4">
            <p>Se el primero en postear</p>
        </div>
    
    
    
    </main>
</template>

<style scoped>

.post-container{
    width: 95%;
}
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
    form{
    width: 100%;
}
.contenedor{
    width: 95%;
}
textarea{
 width: clamp(280px, 90%, 600px) !important;
 background: rgba(255, 255, 255, 0.205);
 border: none;
 border-radius: .5rem;
 color: #FEFEFE;
 height: auto;
 padding: 1rem;
}
</style>