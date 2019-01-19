<template>
  <div id="footballInfo">

  <!--<img  alt="64x64" src="../logo.png"  style="width: 64px; height: 64px;">-->
  <div class="container-fluid" v-for="article in articles">
    <div class="row">
      <div class="col-md-2">
        <img v-bind:src="article.urlToImage" alt="football image" id="sportsImage">
      </div>
      <div class="col-md-10">
        <h3>{{article.title}}</h3>
        <p v-show="!clicked" v-on:click="clicked=!clicked">{{article.description}}</p>
        <p v-show="clicked" v-on:click="clicked=!clicked">{{article.content}}</p>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
        articles:[{title:"",description:"",url:"",urlToimage:"",content:""}],
        clicked : false
    }
  },
    methods:{
        describe:function(){
          //article.clicked=!article.clicked;
          console.log(article);
        }
    },
  created(){
    this.$http.get('https://newsapi.org/v2/everything?q=football&apiKey=5363fa92757e4f8aa68ba122d7cd488e').then(function(data){
      //var body=data.body;
      var article=data.body.articles;
       console.log(article);
       //console.log(article[0].urlToImage);
       this.articles=article;
    });
  }
}
</script>
<style>
.row{
  border:solid;
  border-radius:7px;
  border-color: grey;
  margin: 4px;
}

#sportsImage {
  width:154px;
  height:104px;
  border-radius: 5px;
  margin-top:4px;
  margin-bottom:4px;
}
</style>
