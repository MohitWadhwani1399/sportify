<template>
  <nav id="app-header" class="header">
    <div class="nav-item nav-home">
      <router-link to="/" class="text">Sportify</router-link>
    </div>
    <div class="menu-btn">
      <button v-on:click="displayMenu = !displayMenu">☰</button>
    </div>
    <ul class="nav-list" v-bind:class="{ active: displayMenu }">
      <li class="nav-item current">
        <router-link class to="/">Home</router-link>
      </li>
      <li class="nav-item"><router-link class to="/">Archives</router-link></li>
      <li class="nav-item"><router-link class to="/">Disabled</router-link></li>
      <li class="nav-item">
        <router-link class to="/aboutUs">About us</router-link>
      </li>
      <li class="nav-item">
        <form class>
          <input class type="text" placeholder="Search" aria-label="Search" />
          <button class type="submit">Search</button>
        </form>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    displayMenu: false
  })
}
</script>
<style scoped>
.header {
  display: flex;
  height: 60px;
}
.nav-list {
  flex: 1;
  overflow: hidden;
  display: flex;
  list-style: none;
  padding: 0 40px;
  height: 60px;
  justify-content: space-evenly;
  align-items: center;
  background: black;
}
.menu-btn {
  width: 60px;
  height: 60px;
  display: none;
}
.menu-btn button {
  width: 100%;
  height: 100%;
  border: none;
  background: black;
  color: deepskyblue;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 930px) {
  .header {
    flex-wrap: wrap;
  }
  .nav-list {
    display: none;
  }
  .menu-btn {
    display: block;
    order: -1;
  }
  .nav-home {
    flex: 0 0 calc(100% - 60px);
  }
}
.nav-item {
  padding: 10px 15px;
  min-width: 80px;
  text-align: center;
}
.nav-item a {
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}
.current {
  background: deepskyblue;
}
.nav-item:hover {
  background: deepskyblue;
}
.nav-item:last-child:hover {
  background: none;
}
.nav-home {
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: deepskyblue;
  width: 20%;
}
.active {
  display: flex;
  flex-direction: column;
  padding-top: 1em;
  flex: none;
  height: calc(100vh - 60px);
  z-index: 999;
  max-width: 100%;
}
</style>
