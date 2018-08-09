<template>
    <div class="topBottom">    <!--vue2.0根-->
    <div>
      <div class="userimg"><img :src="userimg">
      <h4>{{username}}</h4></div>
      <div class="mui-content">
       <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news/newslist">
		            <span class="mui-icon mui-icon-star-filled"></span>
		              <div class="mui-media-body">收藏</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photos/photoslist">
		              <span class="mui-icon mui-icon-chat"></span>
		                <div class="mui-media-body">评价</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/goodsslist">
		               <span class="mui-icon mui-icon-eye"></span>
		             <div class="mui-media-body">最近预览</div></router-link></li>
		</ul>
      </div>
      <div class="mui-content content2">
       <h6>美团钱包</h6>
       <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/news/newslist">
		            <span class="mui-icon mui-icon-pengyouquan"></span>
		              <div class="mui-media-body">我的钱包</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/photos/photoslist">
		              <span class="mui-icon mui-icon-pengyouquan"><span class="mui-badge">领券</span></span>
		                <div class="mui-media-body">红包/卡券</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/goods/goodsslist">
		               <span class="mui-icon mui-icon-pengyouquan"></span>
		             <div class="mui-media-body">余额</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/photos/photoslist">
		              <span class="mui-icon mui-icon-pengyouquan"></span>
		                <div class="mui-media-body">美团信用卡</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/goods/goodsslist">
		               <span class="mui-icon mui-icon-pengyouquan"><span class="mui-badge">抽奖</span></span>
		             <div class="mui-media-body">手机充值</div></router-link></li>
		</ul>
      </div>
      <div class="mui-content content2">
       <h6>美团服务</h6>
       <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/news/newslist">
		            <span class="mui-icon mui-icon-pengyouquan"></span>
		              <div class="mui-media-body">会员中心</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/photos/photoslist">
		              <span class="mui-icon mui-icon-pengyouquan"></span>
		                <div class="mui-media-body">美团公益</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/goods/goodsslist">
		               <span class="mui-icon mui-icon-eye"></span>
		             <div class="mui-media-body">客服中心</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/photos/photoslist">
		              <span class="mui-icon mui-icon-chat"></span>
		                <div class="mui-media-body">免流量美团</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/goods/goodsslist">
		               <span class="mui-icon mui-icon-eye"></span>
		             <div class="mui-media-body">发票助手</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/photos/photoslist">
		              <span class="mui-icon mui-icon-chat"></span>
		                <div class="mui-media-body">我要合作</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/goods/goodsslist">
		               <span class="mui-icon mui-icon-eye"></span>
		             <div class="mui-media-body">关于美团</div></router-link></li>
		</ul>
      </div>
      </div>
      </div>
</template>

<script>
import common from '../../kits/common.js';
export default {
    data(){
        return {
            userimg:"",
            username:""
        }
    },
    created(){
       this.getuser();
    },
    methods:{
        getuser(){
            this.userimg=common.apidomain+"/DessertShop/images/User.jpg";
            this.username="张某某";
        }

    }
   
}
</script>

<style scoped>
    .userimg
    {
        text-align: center;
        background-color: rgb(78, 187, 183);
        padding-bottom: 20px;
    }
    .userimg img{
        width: 60px;
        height: 60px;
        margin: 20px auto 10px;
        border: 2px solid #fff;
        border-radius: 50%;
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
  }
  .mui-grid-view.mui-grid-9 .mui-media .mui-icon
  {
      font-size:1.5em;
      color: rgb(78, 187, 183);
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell
  {
      padding: 11px 0;
  }
  .content2 {
      margin: 0 auto;
      padding: 0 5% 10px;
  }
  .content2 h6
  {
      border-top: 1px solid rgba(200, 200, 200, 0.2);
      padding-top: 10px;
      margin-top: 0;
      color: #000;
      font-weight: bold;
  }
</style>
