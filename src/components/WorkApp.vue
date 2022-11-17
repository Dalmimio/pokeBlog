<script>
</script>


<template>
    <main class="d-flex flex-column align-items-center">
        <h1>Work whit US</h1>

    <article>
        <img src="https://github.com/Dalmimio/Img-blog/blob/main/team.gif?raw=true" alt="team">
        <div>
            <h3>Be part of something big</h3>
        <p>Being a pokeBlog contributor means an opportunity to be a better version of yourself, contributing your knowledge for the good of a constantly growing community.</p>
        </div>
    </article>

    <article>
        <img src="https://github.com/Dalmimio/Img-blog/blob/main/blac.gif?raw=true" alt="Diance">
        <div>
            <h3>Join the team</h3>
        <p>If you want to share your knowledge about pokemons and their care, we invite you to be part of the team.</p>
        <RouterLink to="/register" class="btn-more btn">
            Apply
        </RouterLink>
        </div>
    </article>

    <article>
        <img src="https://github.com/Dalmimio/Img-blog/blob/main/abrazo.gif?raw=true" alt="about">
        <div>
            <h3>Our values</h3>
        <p>We invite you to learn about the mission and vision that move us and make this possible.</p>
        <RouterLink to="/about" class="btn-more btn">
            About us
        </RouterLink>
        </div>
    </article>

    </main>
</template>


<style scoped>
    h1{
        margin: 2rem;
    }
    article{
    width: 90%;
    height: auto;
    margin: 2rem 0rem;
    display: flex;
    flex-direction: column;

    }
    article img{
        width: 100%;
        height: 50%;
        border-radius: 1.5rem 1.5rem 0rem 0rem;
    }
    article div{
        padding: 5px;
        height: 50%;
        background-color: rgba(240, 248, 255, 0.089);
        border-radius: 0rem 0rem 1.5rem 1.5rem;
    }
    article h3{
        margin: 1rem 0rem;
    }
    article p{
        text-align: justify;
    }
</style>