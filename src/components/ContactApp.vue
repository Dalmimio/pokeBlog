<script setup>

</script>

<template>
    <main class="d-flex flex-column align-items-center gap-3 justify-content-center">

        <div class="d-flex flex-column div-header align-items-center justify-content-center gap-3">
            <h1>Contact</h1>
        <p>Feel free to contact us. We are always open to discuss new projects, creative ideas or collaborative opportunities.</p>
        </div>

        <form action="">
            <div class="textbox">
                <input type="text" name="" id="" required>
            <label>Name</label>
            <span>
                <font-awesome-icon icon="fa-regular fa-circle-user" />
            </span>
            </div>
            <div class="textbox">
                <input type="mail" name="" id="" required>
            <label>Mail</label>
            <span>
                <font-awesome-icon icon="fa-solid fa-at" />
            </span>
            </div>
            <div class="textbox">
                <input type="text" name="" id="" required>
            <label>Message</label>
            <span>
                <font-awesome-icon icon="fa-regular fa-message" />
            </span>
            </div>
            <button type="submit">
                Submit
            </button>
        </form>
        <img src="https://github.com/Dalmimio/Img-blog/blob/main/cartero-dragonite.png?raw=true" alt="cartero">
    </main>
</template>

<style scoped>
    .div-header{
        width: 90%;
    }
    
    button{
        width: 10rem;
    }
    form{
        width: 90% !important;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
    button, input{
        border: 0;
        height: 60px;
        background: transparent;
        outline: none;
    }
    input{        
        width: 100%;
    }
    .textbox{ 
        width: 90%;
        position: relative;
        margin-bottom: 16px;
    }
    .textbox span{
        position: absolute;
        top: 50%;
        translate: 0 -50%;
        left: 0;
        font-size: 22px;
        pointer-events: none;
        color: rgb(255 255 255/40%)
    }
    .textbox input{
        width: 100%;
        padding: 0 24px 0 36px;
        border-bottom: 2px solid var(--color-primary);
        height: 72px;        
        color: var(--color-text-ligth);
    }
    input:focus{
        border-color: var(--color-btn);
    }
    :is(input:focus, input:valid)~span{
       color: rgb(255 255 255/96%);
    }
    .textbox label{
        position: absolute;
        top: 50%;
        left: 36px;
        translate: 0 -50%;
        color: rgb(255 255 255/40%);
        pointer-events: none;
        transition: 0.4s;
    }
    :is(input:focus, input:valid)~label{
       translate: -40px -40px;
       scale: 0.875;
    }
    input:focus ~ label{
        color: var(--color-btn);
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 0 24px;
        border-radius: 6px;
        background: var(--color-btn);
        color: var(--color-text-ligth);
        border: 0;
        font-weight: 600;
    }
    img{
        width: 290px;
    }
</style>