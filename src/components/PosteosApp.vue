<script setup>
import CommentsApp from './CommentsApp.vue';
import {ref} from 'vue'

const props = defineProps({
    post: {},
    arrayP: {}
})

const textoComment = ref('')
const comentarios = ref([

])
const agregarComent = () => {
    const comment = {
        id: crypto.randomUUID(),
        body: textoComment.value
    }
    comentarios.value.unshift(comment)
    textoComment.value = ''
    console.log(comment);
}

const guardarPost = (id) => {
    
    if (props.post.id === id) {
        props.post.save = !props.post.save
    }
}
</script>

<template>
    <div class="card mb-3 posteo">
        <div class="posteo-header d-flex justify-content-between align-items-center">
            <div class="d-flex gap-4">
                <img src="https://github.com/Dalmimio/Img-blog/blob/main/perfil.jpg?raw=true" alt="profile-icon">
                <p class="text-center">@UserName</p>
            </div>

            <button>
                <font-awesome-icon class="trash" icon="fa-solid fa-trash-can" />
            </button>
        </div>
        <div class="card-body text-white">
            <p class="card-text text-start">{{post.body}}</p>
        </div>        
        <div class="card-footer d-flex gap-3 flex-column">
            <div class="d-flex gap-4 justify-content-between">
                <div class="d-flex gap-4">
                    <button @click="guardarPost(post.id)">
                        <font-awesome-icon :class="post.save? 'icon-fav-y' : 'icon-fav-n'" icon="fa-solid fa-heart" />
                    </button>
                    <button>
                        <font-awesome-icon class="icon-coment-y" icon="fa-solid fa-comment" />
                    </button>
                </div>
                
            </div>
            
            <div class="d-flex gap-2 agregar">
                <input v-model="textoComment" type="text">
                <button class="btn btn-comment" :disabled="!textoComment" @click="agregarComent">
                    Enviar <font-awesome-icon icon="fa-regular fa-pen-to-square" />
                </button>
            </div>
            
        </div>
        <div class="comentarios-container d-flex justify-content-center p-1">
            <div class="linea "></div>

            <div class="d-flex flex-column gap-2 align-items-end mt-3 contenedor-comments">
                <CommentsApp v-for="comment in comentarios" :comment="comment" :key="comment.id"/>
            </div>
        </div>

    </div>
    <!-- <div class="comments d-flex flex-column align-items-center gap-3">
            
            <div class="comentario text-start">
                <p>Hola, soy un comentario en un post, uno dos tres cuatro cinco seis siete ocho nueve diez</p>
                <div class="lin"></div>
            </div>
            
            
        </div> -->
</template>

<style scoped>
    .posteo{
        background-color: rgba(112, 112, 112, 0.349);
        border: 5px;
        width: clamp(300px, 25rem, 600px) !important;
        /* height:clamp(10rem, 12rem, 16rem) !important; */
        max-height: auto;
        color: white;
        padding: .2rem;
        
    }
    .posteo-header{
        padding: 10px;
    }
    .posteo-header img{
        width: 3rem;
        border-radius: 50%;
    }
    .posteo-header p{
        color: rgba(204, 204, 204, 0.63);
        margin-bottom: 0 !important;
        
    }
    .posteo .card-body{
        border-bottom: .5px solid rgba(204, 204, 204, 0.151);
        border-top: .5px solid rgba(204, 204, 204, 0.151);
    
    }

    /* .card-body::-webkit-scrollbar{
        width: 5px;
        background-color: transparent;
    }
    .card-body::-webkit-scrollbar-thumb{
        background: var(--color-primary);
        border-radius: 5px;
    } */
    .icon-fav-y, .trash{
        color: var(--color-primary);
    }
    .icon-fav-n{
        color: rgba(0, 0, 0, 0.418);
    }
    .icon-coment-y{
        color: rgba(0, 0, 0, 0.418);
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
        width: 70%;
        border: none;
        border-radius: .3rem;
        background: rgba(255, 255, 255, 0.185);
        color: white;
        padding: .3rem .5rem;
    }
    .comentarios-container{
        width: 95%;
    }
    .linea{
        width: 3px;
        background-color: var(--color-primary);
        height: auto;
    }
    .contenedor-comments{
        width: 90%;
    }
    .btn-comment{
        background-color: var(--color-primary);
        color: var(--text-light);
        width: auto;
        font-size: 1rem;
    }
    .agregar{
        
    }

    
</style>