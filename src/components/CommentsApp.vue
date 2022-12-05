<script setup>
const props = defineProps({
    comment: {}
})
</script>

<template> 
    <div class="d-flex contenedor">
        <div class="lineH"></div>
        <div class="comment d-flex justify-content-center">
            <p>{{comment.body}}</p>
        </div>
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

.lineH{
    align-self: center;
    width: 9%;
    height: 1px;
    background-color: var(--color-primary);
}
</style>