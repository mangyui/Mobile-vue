<template>
    <div class="topBottom">    <!--vue2.0根-->
        <mt-swipe :auto="3000">
          
           <mt-swipe-item v-for="item in list">
               <img :src="item.img" alt="">
           </mt-swipe-item>
          
        </mt-swipe>
      </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
   data(){
       return {
           list:[]
       }
   },
   created(){
       this.getimgs();
   },
   methods:{
       getimgs(){
           var url="../data/img.json";
           this.$http.get(url).then(function(response) {
               if(response.body.status!=0)
               {
                   Toast(response.body.message);
                   return;
               }

               this.list=response.body.message;
               
           })
       }
   }
   
}
</script>

<style scoped>
  .mint-swipe{
      height:240px;
  }
  .mint-swipe-item img
  {
      width:100%;
      height:100%;
  }
  .mint-swipe-item
  {
       text-align: center;
       line-height:300px;
       color:#fff;
       font-size:36px;
       background-color:green;
       width:100%;
       height:240px;
  }
</style>
