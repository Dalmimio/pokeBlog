<script>
  
    
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">@Username</slot>
          </div>

          <div class="modal-body d-flex justify-content-center align-items-center flex-column">
            <textarea name="contenido" id="contenido" cols="30" rows="3" placeholder="Vamos, ¡escribe algo!"></textarea>

            <div class="d-flex flex-column gap-2 m-3 div-input align-items-center p-1">

              <div class="file d-flex justify-content-center mb-3">

                <label for="filepost">Choose photo</label>
                <input type="file" id="filepost">
              </div>

              <div class="d-flex justify-content-center flex-wrap rules">
                <p>Your post must comply with the </p>
              <RouterLink to="/terms" class="">rules</RouterLink>
              </div>

              
            </div>
          </div>

          <div class="modal-footer d-flex justify-content-around">
            
            <button type="submit" class="btn btn-more post" @click="$emit('close')">Post</button>
            <button type="submit" class="btn-x" @click="$emit('close')">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: clamp(280px, 70%, 600px);
  height: 80%;
  margin: 0px auto;
  padding: 20px 20px;
  background-color: var(--color-background);
  border-radius: 25px;
  transition: all 0.3s ease;
}
.modal-header{  
  height: 8%;
  margin-bottom: 5px;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 0;
  height: 80%;
}
.modal-body textarea{
  padding: 5px;
  height: 40%;
  width: 100%;
  border: none;
  background: #fafafa15;
  color: white;
  font-size: 1.2rem;
  border-radius: 10px;
}
.div-input{
  width: 100%;
  height: 40%;
  background: #fafafa15;
  border-radius: 10px;
}
.rules p{
  margin: 0;
}
.post{
  width: 7rem !important;
}
.div-input p{
  text-align: center;
  font-size: .8rem;
}
.div-input div a{
  text-decoration: none;
  color: var(--color-primary);
  margin-left: 5px;
}
.file input {
    display: none;
}

.file label {
    padding: 8px 16px;
    background-color: var(--color-primary);
    border-radius: 6px;
}

.modal-footer{
  height: 12%;
}
.btn-x{
        background: transparent;
        border: none;
        color: var(--color-text-ligth);
        font-size: 1.5rem;
    }


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn-close{
  color: var(--color-text-ligth);
  font-size: 1.2rem;
}
</style>