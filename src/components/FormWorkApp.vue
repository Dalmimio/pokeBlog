<script setup>
</script>

<template>
    <main class="d-flex flex-column align-items-center gap-3">
        <h1>Curriculum</h1>

        <form action="">
            <div class="textbox">
                <input type="text" name="nameSurname" id="" required>
            <label>Name and surname</label>
            </div>

            <div class="textbox">
                <input type="mail" name="" id="" required>
            <label>Mail</label>
            <span>
                <font-awesome-icon icon="fa-solid fa-at" />
            </span>
            </div>

            <div class="textbox">
                <input type="date" name="birth" id="birth" required>
            <label>Birth</label>
            <span>
                <font-awesome-icon icon="fa-solid fa-cake-candles" />
            </span>
            </div>

            <div class="textbox">
                <input type="text" name="in" id="in" required>
            <label>Linkedin</label>
            <span>
                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            </span>
            </div>

            <div class="textbox">
                <input type="text" name="in" id="in" required>
            <label>Github</label>
            <span>
                <font-awesome-icon icon="fa-brands fa-github" />
            </span>
            </div>

            <div class="mb-2">                
                <label class="btn btn-more" for="file">
                    Upload CV
                </label>
                <input type="file" name="file" id="file" required>
            </div>
            
            
            
            <button class="btn btn-more" type="submit">
                Apply now
            </button>
        </form>
    </main>
</template>

<style scoped>
    #file {
        display: none;
    }
     button, input{
        border: 0;
        height: auto;
        background: transparent;
        outline: none;
    }
    input{        
        width: 100%;
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
    a{
        color: var(--color-primary);
        text-decoration: none;
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
        padding: 10px 20px !important;
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
    

</style>