<script setup>

import PosteosApp from './PosteosApp.vue';
import {ref, onMounted } from 'vue'


onMounted(() => {
  console.log('Montado')
})


const textoPost = ref('')
const posteosSaved = ref([])



const subirPost = () => {
    console.log('Hola');
      const post={
        id: crypto.randomUUID(),
        body: textoPost.value,
        save: false
      }
        posteosSaved.value.unshift(post)
        console.log(posteosSaved.value);
        textoPost.value= ''
}
    
</script>

<template>
    <main class="d-flex flex-column align-items-center">
        <form @submit.prevent="subirPost">
            <div class="post-creat d-flex flex-column gap-2 mt-3 align-items-center">
                <textarea v-model="textoPost" placeholder="Escribi algo a ver" name="" id="" cols="30" rows="2"></textarea>
            </div>
            <button :disabled="!textoPost" type="submit" class="btn btn-more mt-2">Post</button>
        </form>
        <!-- <button  @click="showModal = true" class="btn btn-more mt-2">Post </button> -->
    
        <div v-if="posteosSaved.length!=0" class="contenedor d-flex gap-2 flex-wrap align-items-center justify-content-center mt-3">
    
            <PosteosApp  v-for="post in posteosSaved" :post="post" :key="post.id" :arrayP="post" />
    
        </div>

        <div v-else class="nothing d-flex flex-column gap-2 mt-4">
            <p class="fw-bold">Aun no guardaste nada</p>

            <img src="https://github.com/Dalmimio/Img-blog/blob/main/psicoduck.png?raw=true" 
            alt="no has guardado nada">
           

        </div>
    </main>
</template>

<style scoped>
form{
    width: 100%;
}
.contenedor{
    width: 95%;
}
textarea{
 width: clamp(260px, 80%, 600px) !important;
 background: rgba(255, 255, 255, 0.205);
 border: none;
 border-radius: .5rem;
 color: #FEFEFE;
 height: auto;
 padding: 1rem;
}
.nothing{
    width: 280px;
}
.nothing img{
    width: 100%;
}
</style>