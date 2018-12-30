<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>

  </div>
</template>

<script>
import header from './assets/components/header.vue'
import sports from './assets/components/sports.vue'
import footer from './assets/components/footer.vue'
export default {
  components:{
    'app-header':header,
    'app-sports':sports,
    'app-footer':footer
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
/* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
}

template {
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
}

template {
    color: red;
    background-image: url('https://unsplash.it/1080');
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

h1{
    line-height: 1.5;
    font-weight: 900;
    letter-spacing: 1px;
    background-color: red;
}

#id .catagories {

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 30vh;
}

#id .catagory {
    width: 25vh;
    height: 25vh;
    border-radius: 5px;
    background: lavender;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('https://unsplash.it/200');
    color: black;
    font-weight: bold;
}
*/
