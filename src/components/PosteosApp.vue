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
        </div>
        <div class="card-footer d-flex gap-3">
            <button @click="guardarPost(post.id)">
                <font-awesome-icon :class="post.save? 'icon-fav-y' : 'icon-fav-n'" icon="fa-solid fa-heart" />
            </button>         
            <button>
                <font-awesome-icon class="icon-coment-y" icon="fa-solid fa-comment" />
            </button>
            
        </div>
    </div>
</template>

<style scoped>
    .posteo{
        background-color: rgba(112, 112, 112, 0.13);
        border: 5px;
        width: clamp(300px, 25rem, 600px) !important;
        height: auto;
        color: white;
        
    }
    .posteo .card-body{
        overflow-y: scroll;
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
</style>