<script setup>
</script>

<!-- agregar un evento para que muestre el nombre del archivo
 -->

<template>
    <main class="d-flex flex-column align-items-center">
        <h2>General account settings</h2>

        <div class="header d-flex mt-3 justify-content-center align-items-center gap-3">
            <img src="https://github.com/Dalmimio/Img-blog/blob/main/perfil.jpg?raw=true" alt="profile-icon">
            <div class="file">
                <label for="profileph">Choose photo</label>
                <input type="file" id="profileph">
            </div>
        </div>
        <div class="mt-4 w-75">
            <h3>Personal information</h3>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Gunter">
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="@SoyGunter69">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="pila@pinguino.com">
            </div>
            <div class="form-group">
                <label for="Password">Password</label>
                <input type="Password" id="pass">
            </div>
            <div class="form-group">
                <label for="Password">Repeat</label>
                <input type="Password" id="repass">
            </div>
            <button type="submit" class="btn-more btn mt-4">Save changes</button>

        </div>
    </main>
</template>

<style scoped>
.header {
    width: 90%;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #c2c2c252;
}

.header img {
    border-radius: 50%;
    width: 100px;
}

.header input {
    border-radius: 5px;
}
h3{
    opacity: .8;
}

.file input {
    display: none;
}

.file label {
    padding: 8px 16px;
    background-color: var(--color-primary);
    border-radius: 6px;
}
.form-group{
    text-align: start;
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
}
.form-group input{
    margin-left: 1rem;
    border-radius: 5px;
    border: none;
    background-color: rgba(240, 248, 255, 0.199);
    color: var(--color-text-ligth);
    padding: 2px 4px;
}
</style>