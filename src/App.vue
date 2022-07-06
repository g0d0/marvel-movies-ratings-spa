<template>
  <div>
    <header>
      <img src="./assets/newway_logo.png" />

      <p>Movies Marvel Rank</p>

    </header>
    
    <div class="container">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style lang="scss" scoped>
  header
  {
    padding: 1rem 0rem 0rem 1rem;
    background-image: url('./assets/background_purple.jpg');
    filter: grayscale(50%);
    background-position: center;
    height: 270px;
    margin-bottom: 2rem;

    box-shadow: 0px 3px 9px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 3px 9px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 9px 0px rgba(0,0,0,0.75);

    p {
      font-family: "Bungee";
      font-size: 1.1rem;
      opacity: 0.4;
      margin: 0px;
    }
  }
</style>