<template>
    <div class="topBottom">    <!--vue2.0根-->
        <mt-swipe :auto="3000">
          
           <mt-swipe-item v-for="item in list">
               <img :src="item.img" alt="">
           </mt-swipe-item>
          
        </mt-swipe>

        <div class="mui-content content0">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-list"><span class="mui-badge">红包</span></span>
		                    <div class="mui-media-body">美食</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/photos/photoslist">
		                    <span class="mui-icon mui-icon-redo"></span>
		                    <div class="mui-media-body">电影/演出</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/goods/goodsslist">
		                    <span class="mui-icon mui-icon-download"></span>
		                    <div class="mui-media-body">酒店住宿</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/mess/messlist">
		                    <span class="mui-icon mui-icon-compose"></span>
		                    <div class="mui-media-body">休闲娱乐</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/video/videolist">
		                    <span class="mui-icon mui-icon-pengyouquan"><span class="mui-badge">领券</span></span>
		                    <div class="mui-media-body">外卖</div></router-link></li>		       
		        </ul> <div class="hr90"></div>
		</div>
        
         <div class="mui-content content2">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-list"></span>
		                    <div class="mui-media-body">机票/火车票</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/photos/photoslist">
		                    <span class="mui-icon mui-icon-redo"></span>
		                    <div class="mui-media-body">KTV</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/goods/goodsslist">
		                    <span class="mui-icon mui-icon-download"></span>
		                    <div class="mui-media-body">周边游/旅游</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/mess/messlist">
		                    <span class="mui-icon mui-icon-compose"></span>
		                    <div class="mui-media-body">丽人/美发</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/video/videolist">
		                    <span class="mui-icon mui-icon-pengyouquan"></span>
		                    <div class="mui-media-body">美发</div></router-link></li>	
                   <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-list"></span>
		                    <div class="mui-media-body">按摩/足疗</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/photos/photoslist">
		                    <span class="mui-icon mui-icon-redo"></span>
		                    <div class="mui-media-body">洗浴/汗蒸</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/goods/goodsslist">
		                    <span class="mui-icon mui-icon-download"></span>
		                    <div class="mui-media-body">景点/门票</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/mess/messlist">
		                    <span class="mui-icon mui-icon-compose"></span>
		                    <div class="mui-media-body">闪购</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/video/videolist">
		                    <span class="mui-icon mui-icon-pengyouquan"></span>
		                    <div class="mui-media-body">全部分类</div></router-link></li>		       
		        </ul> 
		</div>
        <div class="dis-content">
            <ul class="mui-table-view mui-grid-view">
		       
		        <li v-for="item in list2" class="mui-table-view-cell mui-media mui-col-xs-6">
		            <router-link to="/disimg">
                  <!--   <img class="mui-media-object" :src="item.img_url"> -->
                    <div class="mui-media-object" :style="{'background-color': item.color}"></div>
		                <div class="mui-media-body divpo"><p class="plable" :style="{'background-color': item.color}">{{item.label}}</p>
                            <p class="ptitle">{{item.title}}</p>
                            <p class="ptype">{{item.type}}</p>
                        </div>
                   </router-link>
                </li>
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
           list:[],
           list2:[]

       }
   },
   created(){
       this.getimgs();
       this.getimglist2();
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
       },
       getimglist2(){
           this.list2=[
               {
                    "id":101,
                    "label":"很优惠",
                    "color":"#e88565",
                    "title":"【到店吃】正新鸡排",
                    "type":"美食",
                    "dis":"5折抢购",
                    "img_url":common.apidomain+"/DessertShop/images/team/team-1.jpg"
                },
                               {
                    "id":102,
                    "label":"有格调",
                    "color":"#ef3e4a",
                    "title":"于都湖彬大酒店",
                    "type":"酒店",
                    "dis":"",
                    "img_url":common.apidomain+"/DessertShop/images/team/team-2.jpg"
                },
                               {
                    "id":103,
                    "label":"午餐要讲究",
                    "color":"#a7bbc3",
                    "title":"蚝莊",
                    "type":"河海鲜",
                    "dis":"",
                    "img_url":common.apidomain+"/DessertShop/images/team/team-3.jpg"
                },
                               {
                    "id":104,
                    "label":"周末去哪儿",
                    "color":"#776ea7",
                    "title":"赣州极地海洋世界成人票",
                    "type":"周边游",
                    "dis":"",
                    "img_url":common.apidomain+"/DessertShop/images/team/team-1.jpg"
                },
           ]
       }
   }
   
}
</script>

<style scoped>
 /* .toleft
	 {
		 display: none;
	 } */
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
       background-color:rgb(78, 187, 183);
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
      font-size: 0.7em;
      color: rgb(82, 82, 82);
  }
  .content0 .mui-icon::before
  {
      color: #fff;
      background-color: rgb(78, 187, 183);
      border-radius: 50%;
      box-shadow: 0 3px 3px rgba(20, 119, 116, 0.2);
      
  }
  .content2 .mui-grid-view.mui-grid-9 .mui-media .mui-icon
  {
      font-size:1.5em;
      color: rgb(78, 187, 183);
  }
      .mui-grid-view.mui-grid-9 .mui-media .mui-icon
  {
      font-size:2.4em;
  }
     .content0 .mui-grid-view.mui-grid-9 .mui-table-view-cell
  {
      padding: 5px 0;
  }
   .content2 .mui-grid-view.mui-grid-9 .mui-table-view-cell
  {
      padding: 0px 0;
  }
  .mui-col-xs-3 {
    width: 20%;
}
.mui-icon .mui-badge {
    margin-left: -15px;
}
.hr90{
    width: 90%;
    margin: 0 auto;
    padding: 0;
    border-top:1px solid rgba(200, 200, 200, 0.3);
}

.dis-content .mui-table-view
{
    margin: 10px 0;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object{
    height: 110px;
    opacity: 0.6;
     max-width: 99.9%;
}
.mui-table-view{
    position: static;
}
.mui-table-view::after
{
   height: 0;
}
.mui-table-view .mui-media, .mui-table-view .mui-media-body
{
    overflow: visible;
}
.divpo
{
    position: absolute;
    top:2px;
    left: 14px;
}
.divpo p
{
   text-align: left;
   padding: 5px 10px;
}
.plable{
    color: #fff;
    border-radius: 0 0 5px 0;
    display: inline-block;
    float: left;
    padding-right: 10px;
    font-weight: bold;
}
.ptitle
{
    clear: both;
    color: #000;
    font-weight: bold;
}
 .ptype
{
   color: rgb(82, 82, 82);
   font-size: 12px;
} 
</style>
