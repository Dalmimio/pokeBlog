<script setup>
import TwPosteos from './twPosteos.vue';


</script>

<template>
 <main class="d-flex flex-column align-items-center">
  <div class="d-flex flex-column align-items-center header-main">
    <img src="../assets/logoCompleto.png" class="logo" alt="pokeblog">
   <p>Welcome to the pokemon blog, here you will find information, tips and much more about pokemon</p>

   <RouterLink to="/about" class="btn btn-more">More about us</RouterLink>
  </div>
  <div class="mt-5 d-flex flex-column align-items-center">
    <h2>What will you find?</h2>

      <div class="mt-5 d-flex align-items-center justify-content-center flex-wrap moreinfo">
        <article>
        <h5>Updated information</h5>
      </article>
      <article>
        <h5>The best tips to take care of your pokemon</h5>
      </article>
      <article>
        <h5>And much more</h5>
      </article>
      </div>

    <img src="../assets/bulbasaur.png" class="bulbasaur mt-5" alt="bulbasaur">

    <p class="mt-5">Do you like pokemon and help those who need it? Don't hesitate to join the team</p>

    <RouterLink to="/workwithus" class="btn btn-more">Work with us</RouterLink>
  </div>
  <div class="mt-5 d-flex flex-column align-items-center">
    <h2 class="text-center">Recommended pokemon centers</h2>

    <div class="mt-3 d-flex align-items-center justify-content-center recomended flex-wrap">
      <article class="d-flex flex-column centro1">
        <img src="../assets/centroPokemon-Sinnoh.png" alt="sinnoh">
        <!-- https://www.deviantart.com/flavia-elric/art/Sinnoh-Pokemon-Center-798813908 -->
        <h5>Sinnoh Pokemon Center</h5>
        <p>Located north of Kanto, this center is the best option for you to take care of your pokemon</p>
      </article>
    
      <article class="d-flex flex-column">
        <img src="../assets/centroCiudad_Loza.png" alt="sinnoh">
        <h5>Loza City Pokémon Center</h5>
        <p>Ciudad Loza is a city located to the west of the Teselia region, another of the best options</p>
      </article>
    </div>

      
  </div>

  <div class="pokedex">
    <a href="https://pokedex-pokeblog.netlify.app/" target="_blank" ><img src="https://github.com/Dalmimio/Img-blog/blob/main/pokedex.png?raw=true" alt=""></a>
  </div>

  <TwPosteos />

 </main>
</template>

<style scoped>
  .logo{
    width: clamp(280px, 50%, 400px);
  }
  main div .moreinfo p,  main .header-main p{
    margin-top: 2rem;
    width: 90%;
  }
  
  .bulbasaur{
    margin-top: 2rem;
    width: 250px;
  }
  .moreinfo article{
    background-color: var(--color-background-green);
    color: var(--color-text-ligth);
    text-align: center;
    width: clamp(290px, 30%, 600px);
    margin: .5rem;
    height: 5rem;
    padding: .5rem 2rem;
    border-radius: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .recomended{
    width: 90%;
    gap: 2rem;
  }
  .recomended .centro1{
    padding-right: 1.5rem;
    border-right: solid 1px rgba(177, 177, 177, 0.2);
  }
  .recomended article{
    color: var(--color-text-ligth);
    text-align: center;
    width: clamp(290px, 40%, 600px);
    margin: .5rem;
    padding: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .recomended article img{
    width: 90%;
    margin-bottom: 1rem;
  }
 .pokedex{
  width: 280px;
 }
 .pokedex img{
  width: 100% !important;
 }
  @media screen and (max-width: 818px){
    .recomended .centro1{
    padding-bottom: 1.5rem;
    border-bottom: solid 1px rgba(177, 177, 177, 0.2);
    
    border-right: none;
  }
    
  }
</style>