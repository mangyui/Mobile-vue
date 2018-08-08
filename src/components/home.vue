<template>
    <div class="topBottom">    <!--vue2.0根-->
        <mt-swipe :auto="3000">
          
           <mt-swipe-item v-for="item in list">
               <img :src="item.img" alt="">
           </mt-swipe-item>
          
        </mt-swipe>

        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-list"></span>
		                    <div class="mui-media-body">相关资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photos/photoslist">
		                    <span class="mui-icon mui-icon-redo"></span>
		                    <div class="mui-media-body">商品分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/goodsslist">
		                    <span class="mui-icon mui-icon-download"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/mess/messlist">
		                    <span class="mui-icon mui-icon-compose"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/video/videolist">
		                    <span class="mui-icon mui-icon-pengyouquan"></span>
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/myem/myemlist">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">我的消息</div></router-link></li>
		        </ul> 
		</div>
      </div>
</template>

<script>
import {Toast} from 'mint-ui';
import common from '../kits/common.js';
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
           var url=common.apidomain+"/Mobile-vue/data/img.json";
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
      height:200px;
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
       height:200px;
  }
  .mui-content > .mui-table-view:first-child
  {
      margin-top: 0;
  }
  .mui-content,.mui-content ul{
      background-color: #fff;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
      border-bottom: 0px;
      border-right: 0px;
  }
    .mui-grid-view.mui-grid-9{
      border-top: 0px;
      border-left: 0px;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body 
  {
      font-size: 13px;
  }
  .mui-icon::before
  {
      color: #fff;
      background-color: rgb(0, 149, 248);
      border-radius: 10%;
  }
</style>
