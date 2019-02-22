<template>
  <div id="app-sports" class="catagories">
    <div class="category"><router-link to="/cricket">cricket</router-link></div>
    <div class="category">
      <router-link to="/football">football</router-link>
    </div>
    <div class="category"><router-link to="/esports">esports</router-link></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
.catagories {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: calc(100vh - 60px);
  padding: 2em 0;
  background: url(https://unsplash.it/1024) no-repeat;
  background-size: cover;
  background-position: center;
}
.category {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 200px;
  height: 200px;
  border-radius: 10px;
  padding: 1em 2em;
  background: url(https://unsplash.it/1100) no-repeat;
  background-size: cover;
  background-position: center;
  margin: 2em;
}
a {
  color: black;
  text-decoration: none;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
}

@media screen and (max-width: 800px) {
  .catagories {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
