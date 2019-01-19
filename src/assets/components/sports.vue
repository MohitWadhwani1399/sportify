<template>
  <div id="app-sports">
    <div class="catagories">
        <div class="container">
          <div class="row">

            <div class="col-md-4">
              <div class="jumbotron">
                <div class="category-sports"><router-link to='/cricket'>cricket</router-link></div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="jumbotron">
                <div class="category-sports"><router-link to='/football'>football</router-link></div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="jumbotron">
                <div class="category-sports"><router-link to='/esports'>esports</router-link></div>
              </div>
            </div>
          </div>
        </div>
    </div>
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
  .jumbotron{
    position:relative;
    top:100px;
  }
</style>
