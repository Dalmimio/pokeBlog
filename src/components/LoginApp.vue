<script setup>
</script>

<template>
    <main>
        <h1>
            Log in
        </h1>
        <p>
            It's quick & simple
        </p>
        <form action="">
            
            <div class="textbox">
                <input type="mail" name="" id="" required>
            <label>Mail</label>
            <span>
                <font-awesome-icon icon="fa-solid fa-at" />
            </span>
            </div>
            <div class="textbox">
                <input type="password" name="" id="" required>
            <label>Password</label>
            <span>
                <font-awesome-icon icon="fa-solid fa-key" />
            </span>
            </div>
            
            <button type="submit">
                Log in
            </button>
        </form>

        
      <div class="d-flex align-items-center justify-content-center flex-column footer mt-5">
        <div class="d-flex align-items-center gap-3">
            <p>Forgot password?</p>
        <RouterLink to="/register"> Click Here</RouterLink>
    </div>
        <div class="d-flex align-items-center gap-3">
            <p>
            Haven't registered?
        </p>
        <RouterLink to="/register">Sign up here</RouterLink>
        </div>
      </div>
    </main>
</template>

<style scoped>
     button, input{
        border: 0;
        height: auto;
        background: transparent;
        outline: none;
    }
    input{        
        width: 100%;
    }
    button{
        padding: 10px 20px !important;
    }
    form{
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
    .textbox{
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
    a{
        color: var(--color-primary);
        text-decoration: none;
    }
    .textbox input{
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
        width: 90%;
    }
    p{
        margin: 2rem 0rem;
    }
    .footer p{
       margin: 5px 0;
    }

</style>