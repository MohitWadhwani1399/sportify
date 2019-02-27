<template>
  <div id="esportsInfo">

  <!--<img  alt="64x64" src="../logo.png"  style="width: 64px; height: 64px;">-->
  <div class="container-fluid" v-for="(article,index) in articles">
    <div class="row" v-bind:id="index">
      <div class="col-md-2">
        <img v-bind:src="article.urlToImage" alt="football image" id="sportsImage">
      </div>
      <div class="col-md-10">
        <h3>{{article.title}}</h3>
        <p v-bind:id="'description'+index" v-show="indexes[index].show" v-on:click="describe(index)">{{article.description}}</p>
        <p v-bind:id="'content'+index" v-show="!indexes[index].show" v-on:click="describe(index)">{{article.content}}</p>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
        articles:[],  
        indexes:[],  
    }
  },
    methods:{
        describe:function(index){
            //console.log(index);
            if(this.indexes[index].show==true)
            this.indexes[index].show=false;
            else this.indexes[index].show=true;
            //console.log(index);
        } 
    },
    created(){ 
        this.$http.get('http://api.espn.com/v1').then(function(data){
            this.articles=data.body.articles;
            console.log(this.articles);
            
            for(let i=0;i<(this.articles.length);i++){
                    var obj={};
                    obj["index"]=i;
                    obj["show"]=true;
                    this.indexes.push(obj);
                }
                //console.log(this.indexes);
                //console.log(this.indexes.length);
            });
            
            
        },
    
    computed:{
        
    },
}
</script>
<style scoped>
.row{
  border:solid;
  border-radius:7px;
  border-color: grey;
  margin: 4px;
}

#sportsImage {
  width:134px;
  height:114px;
  border-radius: 5px;
  margin-top:4px;
  margin-bottom:4px;
}
</style>