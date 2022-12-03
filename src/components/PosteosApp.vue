<script setup>
const props = defineProps({
    post: {},
    arrayP: {}
})

const guardarPost = (id) => {
    
    if (props.post.id === id) {
        props.post.save = !props.post.save
    }
    // const index = arrayP.value.findIndex(post => post.id === id)
    // console.log(index);
    // console.log(arrayP.value[index]);
    // arrayP.value[index].save = !arrayP.value[index].save
}
</script>

<template>
    <div class="card mb-3 posteo">
        <div class="card-body text-white">
            <p class="card-text text-start">{{post.body}}</p>
            <div class="card-footer d-flex gap-3">
            <button @click="guardarPost(post.id)">
                <font-awesome-icon :class="post.save? 'icon-fav-y' : 'icon-fav-n'" icon="fa-solid fa-heart" />
            </button>         
            <button>
                <font-awesome-icon class="icon-coment-y" icon="fa-solid fa-comment" />
            </button>
            <input type="text" maxlength="10">
        </div>
        </div>
        
        <div class="comments d-flex flex-column align-items-center gap-3">
            
            <div class="comentario text-start">
                <p>Hola, soy un comentario en un post, uno dos tres cuatro cinco seis siete ocho nueve diez</p>
                <div class="lin"></div>
            </div>
            
            
        </div>
    </div>
</template>

<style scoped>
    .posteo{
        background-color: rgba(112, 112, 112, 0.13);
        border: 5px;
        width: clamp(300px, 25rem, 600px) !important;
        /* height:clamp(10rem, 12rem, 16rem) !important; */
        height: auto !important;
        color: white;
        padding: .5rem;
        
    }
    .posteo .card-body{
        /* overflow-y: scroll; */
        /* height:clamp(5rem, 6rem, 8rem) !important; */
    }

    .card-body::-webkit-scrollbar{
        width: 5px;
        background-color: transparent;
    }
    .card-body::-webkit-scrollbar-thumb{
        background: var(--color-primary);
        border-radius: 5px;
    }
    .icon-fav-y{
        color: red;
    }
    .icon-fav-n{
        border: red;
    }
    .icon-coment-y{
        color: rgb(0, 0, 0);
    }
    button{
        border: none;
        background: transparent;
        font-size: 1.3rem;
    }
    .card-footer{
        height: auto;
        background: transparent;
    }
    .card-footer input{
        width: 100%;
        border: none;
        border-radius: .4rem;
        background: rgba(255, 255, 255, 0.185);
        color: white;
        padding: .3rem .5rem;
    }

    .comentario{
        background-color: rgba(112, 112, 112, 0.13);
        border-radius: .1rem;
        padding: .2rem;
        margin: .2rem;
        width: 90%;
    }
    .lin{
        width: 90%;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.185);
    }
</style>