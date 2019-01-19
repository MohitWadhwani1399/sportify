<template>
  <div id="cricketInfo">

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created(){
    this.$http.get('http://cricapi.com/api/cricket/').then(function(data){
      console.log(data);
    });
  }
}
</script>
<style scoped></style>
