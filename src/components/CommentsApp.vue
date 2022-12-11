<script setup>

 import { deleteComment } from '../firebase/comments';
 const props = defineProps({
    comment: {}
 })

 
</script>

<template> 
    <div class="d-flex contenedor gap-2">
        <div class="lineH"></div>
        <div class="comment d-flex justify-content-center">
            <p>{{comment.body}}</p>
        </div>
        <button @click=deleteComment(comment.id)>
                <font-awesome-icon class="trash" icon="fa-solid fa-trash-can" />
        </button>
    </div>    
</template>

<style scoped>

.contenedor {
    width: 100%;
}
p{
    text-align: start;
    width: 100%;
}
.comment{
    padding: .2rem;
    width: 90%;
    background-color: rgba(255, 255, 255, 0.041);
    border-radius: .9rem;
    text-align: start;
    padding: .8rem;
}
.trash{
        color: var(--color-primary);
}
button{
        border: none;
        background: transparent;
        font-size: 1.3rem;
}
.lineH{
    align-self: center;
    width: 9%;
    height: 1px;
    background-color: var(--color-primary);
}
</style>