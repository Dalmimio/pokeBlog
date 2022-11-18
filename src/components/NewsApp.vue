<script septup>
import Modal from './Modal.vue';
export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<template>
    <main class="d-flex flex-column align-items-center">
    
        <div class="d-flex flex-column align-items-center gap-3">
            <input type="search" name="" id="search">
            <div>

                <button id="show-modal" @click="showModal = true" class="btn btn-more">New post <font-awesome-icon icon="fa-regular fa-pen-to-square" /></button>
            </div>
    
        </div>
        <div>
            <h1>News App</h1>
        </div>
    
    
        <Teleport to="body">
            <!-- use the modal component, pass in the prop -->
            <modal :show="showModal" @close="showModal = false">
                
            </modal>
        </Teleport>
    </main>
</template>

<style scoped>
#search{
        width:300px;
        height: 50px;
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