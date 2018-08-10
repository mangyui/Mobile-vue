<template>
    <div class="topBottom">    <!--vue2.0根-->
      <div class="distopbg">
          <h1>{{id}}</h1>
          <h3>{{info.label}}</h3>
          <h3>{{info.title}}</h3>
          <h3>{{info.type}}</h3>
      </div>
      </div>
</template>

<script>
import common from '../../kits/common.js';
export default {
   data(){
       return{
           id:0,
           info:{
                "id":102,
                    "label":"有格调",
                    "color":"#ef3e4a",
                    "title":"于都湖彬大酒店",
                    "type":"酒店",
                    "dis":"",
                    "img_url":common.apidomain+"/DessertShop/images/team/team-2.jpg"
           }
       }
   },
   created()
   {
           this.id=this.$route.params.id;  
   },
   methods:{
       getinfo(){

       }
   }
}
</script>

<style scoped>
.distopbg{
    background: url("../../../statics/images/im35.jpeg");
}
</style>
