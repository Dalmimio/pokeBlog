<script septup>

</script>

<template>
    <header class="d-flex justify-content-center">
        <nav class="d-flex w-100 justify-content-between align-items-center">
        <h1 class="navbar-logo">PokeBlog</h1>
        <div class="d-flex gap-3 align-items-center nav navbar-menu">
            <RouterLink to="/">
                <font-awesome-icon icon="fa-solid fa-house-chimney" />
                <span class="navbar-logo-text">Home</span>
            </RouterLink>
            <RouterLink to="/profile">
                <font-awesome-icon icon="fa-solid fa-user" />
                <span class="navbar-logo-text">Profile</span>
            </RouterLink>
            <RouterLink to="/news">
                <font-awesome-icon icon="fa-solid fa-newspaper" />
                <span class="navbar-logo-text">News</span>
            </RouterLink>
            <RouterLink to="/save">
                <font-awesome-icon icon="fa-solid fa-heart" />
                <span class="navbar-logo-text">Beloved</span>
            </RouterLink>
            <a href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <font-awesome-icon icon="fa-solid fa-bars" />
            </a>
            
        
        </div>
        
        <!-- Off canvas -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">PokeBlog</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column gap-2 ">
            <RouterLink to="/" class=""><font-awesome-icon icon="fa-solid fa-house-chimney" /><span>Home</span></RouterLink>
            <RouterLink to="/profile"><font-awesome-icon icon="fa-solid fa-user" /><span>Profile</span></RouterLink>
            <RouterLink to="/news"><font-awesome-icon icon="fa-solid fa-newspaper" /><span>News</span></RouterLink>
            <RouterLink to="/save"><font-awesome-icon icon="fa-solid fa-heart" /><span>Beloved</span></RouterLink>
            <RouterLink to="/about"><font-awesome-icon icon="fa-regular fa-face-smile" /><span>About us</span></RouterLink>
            <RouterLink to="/contact"> <font-awesome-icon icon="fa-solid fa-id-badge" /><span>Contact us</span></RouterLink>
            <RouterLink to="/workwithus"><font-awesome-icon icon="fa-solid fa-briefcase" /><span>Work with us</span></RouterLink>
            <RouterLink to="/terms"><font-awesome-icon icon="fa-solid fa-pen-ruler" /><span>Terms and conditions</span></RouterLink>
            <RouterLink to="/login" class="btn btn-more">Login</RouterLink>
        </div>
        </div>
    </nav>
    </header>

    

</template>




<style scoped>
    @import url('../assets/main.css');
header{
    border-right: var(--color-primary) solid 1px;
    min-height: 10vh;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
}
nav{
    gap: 1rem;
    margin: 0;
    padding: .2rem;
}
nav img{
    width: 40px;
    height: 60px;
}
nav .nav a{
    color: var(--color-text-ligth);
    text-decoration: none;
    font-size: 1.8rem;
    display: flex;
}
nav .nav a span{
    margin-left: 5px;
    font-size: 1.2rem;
}
.navbar-logo-text{
    display: none;
    height: 19px;
}
.navbar-menu{
    transition: .3s;
}
.navbar-menu a{
    position: relative;
    flex: 0 0 36px;
    display: grid;
    width: auto;
    opacity: .8;
    transition: .5s;
}



.navbar-menu > a.active::after{
    content: "";
    display: block;
    position: absolute;
    top: 18px;
    left: 50%;
    translate: -50% 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
}
.navbar-menu a:hover{
    border-bottom: var(--color-principal-text) solid 1px;
    transform: scaleY(1.5px);
}
.offcanvas{
    background-color: var(--color-primary);
    border-radius: 0rem 0rem 0rem 1rem;
        
}
.offcanvas a{
    color: var(--color-text-ligth);
    text-decoration: none;
    font-size: 1.4rem;
    margin: 2px;

}
.offcanvas-body span{
    margin-left: 10px;
    font-size: 1.4rem;
}


.offcanvas-title, nav h1{
    color: yellow;
    -webkit-text-stroke: blue 1.5px;
    font-size: 2rem;
}




@media screen and (max-width: 760px){
    
    .navbar-logo{
        display: none;
    }
    
    .navbar-menu{
        font-size: 1.5rem;
        width: 100%;
        justify-content: space-evenly;

    }
}
@media screen and (max-width: 599px){
    .navbar-logo{
        display: none;
    }
    .navbar-menu{
        gap: 0 !important;
        flex: 1 1 auto;
    }
    .offcanvas{
        width: 70% !important;
        height: 80%;
    }
    .navbar-menu a{
        margin: 0 12px;
        width: 40px;
    }
    
}

@media screen and (max-width: 360px){
    .navbar{
        padding: 0 .5rem;
    }
    .navbar-menu{
        gap: 0 !important;
        
    }
    .navbar-menu a{
        margin: 0 5px;
        width: 40px;
    }
}

</style>