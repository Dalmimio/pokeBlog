<script setup>
    import user from '../store/profile.js';
    
</script>

<template>
    <main class="d-flex flex-column align-items-center">
        <div class="header d-flex gap-3 justify-content-between">
            <img :src="user? user.photoURL : 'https://github.com/Dalmimio/Img-blog/blob/main/perfil.jpg?raw=true'" alt="profile-icon" >
            <div class="text-start align-self-center">
                <h3 >{{user?user.displayName:'Unregistered'}}</h3>
                <p class="username">@ SoyGunter69</p>
            </div>
            <RouterLink to="/settings">
                <font-awesome-icon icon="fa-solid fa-gear" />
            </RouterLink>
        </div>
        <div class="main">
            <h2 class="text-start">Recent Post</h2>
        </div>
        
    </main>
</template>

<style scoped>
.header{
    margin: 1rem 0;
    width: 90%;
    padding-bottom: 1.5rem;
}
.header img{
    border-radius: 50%;
    width: 100px;
}
.username{
    color: #9c9c9c;
    }
a{
    font-size: 1.4rem;
    color: var(--color-text-ligth);
    opacity: .8;
}
.main{
    width: 90%;
    padding-top: 1.5rem;
    border-top: #9b9b9b52 solid 1px;
}
</style>