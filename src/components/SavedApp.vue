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
                <textarea v-model="textoPost" placeholder="Escribi algo a ver" name="" id="" cols="30" rows="5"></textarea>
            </div>
            <button :disabled="!textoPost" type="submit" class="btn btn-more mt-2">Post</button>
        </form>
        <!-- <button  @click="showModal = true" class="btn btn-more mt-2">Post </button> -->
    
        <div v-if="posteosSaved.length!=0" class="post-container d-flex gap-2 flex-wrap justify-content-center mt-3">
    
            <PosteosApp  v-for="post in posteosSaved" :post="post" :key="post.id" :arrayP="post" />
    
        </div>
        <div v-else>
            <p>Aun no guardaste nada</p>

        </div>
    </main>
</template>

<style scoped>
form{
    width:90%;
}

.post-creat textarea{
 width: 60%;
 background: rgba(255, 255, 255, 0.205);
 border: none;
 border-radius: .5rem;
 color: #FEFEFE;
 height: 40%;
 padding: 1rem;
}
</style>