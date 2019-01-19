<template>
  <div id="app-header">
    <nav class="navbar navbar-light bg-secondary sticky-top">
      <div class="container-fluid">
      <router-link to="/" class="navbar-brand bg-primary">Sportify</router-link >
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
        <router-link class="nav-item nav-link active bg-primary" to="/">Home <span class="sr-only">(current)</span></router-link>
        <a class="nav-item nav-link active bg-primary" href="#">Archives</a>
        <a class="nav-item nav-link active bg-primary" href="#">Disabled</a>
        <router-link class="nav-item nav-link active bg-primary" to="/aboutUs">About us</router-link>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
      <button class="btn bg-primary" type="submit">Search</button>
    </form>
    </div>
    </nav>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style scoped>
  .navbar-brand{
    border-radius:5px;
    padding:15px;
  },
  .nav-item{
    color:black;
    border-radius:5px;
    padding:5px;
    padding-left: 8px;
    padding-right: 8px;
  }
</style>
