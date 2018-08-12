<template>
    <div class="topBottom">    <!--vue2.0根-->
    <header id="header" class="mui-bar mui-bar-transparent">
            
			<a class="utopic1 mui-icon mui-pull-left"></a>
			<!-- <h1 class="mui-title">盲鱼的移动商城</h1> -->
            <a class="mui-icon utopic3 mui-pull-right"></a>              
            <a class="mui-icon utopic2 mui-pull-right"></a>
         
		</header>
    <div>
       
      <div class="userimg"> <img :src="userimg">
      <h4>{{username}}</h4><div class="bgring"></div></div>
      <div class="mui-content">
       <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 "><router-link to="/news/newslist">
		            <span class="mui-icon uic1"></span>
		              <div class="mui-media-body">收藏</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 "><router-link to="/photos/photoslist">
		              <span class="mui-icon uic2"></span>
		                <div class="mui-media-body">评价</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 "><router-link to="/goods/goodsslist">
		               <span class="mui-icon uic3"></span>
		             <div class="mui-media-body">最近预览</div></router-link></li>
		</ul>
      </div>
      <div class="mui-content content2">
       <h6>美团钱包</h6>
       <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/news/newslist">
		            <span class="mui-icon uic4"></span>
		              <div class="mui-media-body">我的钱包</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/photos/photoslist">
		              <span class="mui-icon uic5"><span class="mui-badge">领券</span></span>
		                <div class="mui-media-body">红包/卡券</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/goods/goodsslist">
		               <span class="mui-icon uic6"></span>
		             <div class="mui-media-body">余额</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/photos/photoslist">
		              <span class="mui-icon uic7"></span>
		                <div class="mui-media-body">美团信用卡</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/goods/goodsslist">
		               <span class="mui-icon uic8"><span class="mui-badge">抽奖</span></span>
		             <div class="mui-media-body">手机充值</div></router-link></li>
		</ul>
      </div>
      <div class="mui-content content2">
       <h6>美团服务</h6>
       <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/news/newslist">
		            <span class="mui-icon uic9"></span>
		              <div class="mui-media-body">会员中心</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/photos/photoslist">
		              <span class="mui-icon uic10"></span>
		                <div class="mui-media-body">美团公益</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/goods/goodsslist">
		               <span class="mui-icon uic11"></span>
		             <div class="mui-media-body">客服中心</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/photos/photoslist">
		              <span class="mui-icon uic12"></span>
		                <div class="mui-media-body">免流量美团</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/goods/goodsslist">
		               <span class="mui-icon uic13"></span>
		             <div class="mui-media-body">发票助手</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/photos/photoslist">
		              <span class="mui-icon uic14"></span>
		                <div class="mui-media-body">我要合作</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/goods/goodsslist">
		               <span class="mui-icon uic15"></span>
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
    #header{
        background-color:  rgb(37, 173, 180);
    }
    #header .mui-icon
    {
        color: #fff;
        margin: 0 9px;
    }
    #header .mui-icon::before{
         content: '';
         background: url("../../../statics/images/uic.png");
         display: inline-block;
         width: 30px;
         height: 30px;
         background-size: 1580%;
    }
    #header .utopic1::before{
        background-position:-18px -10px;
    }
    #header .utopic2::before{
        background-position:-365px -10px;
    }
    #header .utopic3::before{
        background-position:-425px -10px;
    }
    .userimg
    {
        text-align: center;
        background-color: rgb(78, 187, 183);
        padding-bottom: 20px;
        height: 130px;
        overflow: hidden;
        background: linear-gradient(rgb(37, 173, 180),rgb(83, 233, 228))
    }
    .userimg img{
        width: 60px;
        height: 60px;
        margin: 20px auto 10px;
        border: 2px solid #fff;
        border-radius: 50%;
    }
   .userimg h4,.userimg img{
       position: relative;
        z-index: 5;
   }
     .mui-content > .mui-table-view:first-child
  {
      margin-top: 0;
      padding: 0 10px;
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
      color: rgb(37, 173, 180);
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell
  {
      padding: 10px 0 0;
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
 .mui-content .mui-icon::before
{
    content: '';
    background: url("../../../statics/images/user.png");
    display: inline-block;
    width: 35px;
    height: 35px;
    background-size: 1350%;
}
.mui-content .uic1::before{
    background-position: -79px -27px;
}
.mui-content .uic2::before{
    background-position: -220px -27px;
}
.mui-content .uic3::before{
    background-position: -360px -27px;
}
.mui-content .uic4::before{
    background-position: -62px -170px;
}
.mui-content .uic5::before{
    background-position: -167px -170px;
}
.mui-content .uic6::before{
    background-position: -270px -170px;
}
.mui-content .uic7::before{
    background-position: -374px -170px;
}
.mui-content .uic8::before{
    background-position: -62px -276px;
}
.mui-content .uic9::before{
    background-position: -62px -373px;
}
.mui-content .uic10::before{
    background-position: -166px -373px;
}
.mui-content .uic11::before{
    background-position: -270px -373px;
}
.mui-content .uic12::before{
    background-position: -377px -373px;
}
.mui-content .uic13::before{
    background-position: -62px -480px;
}
.mui-content .uic14::before{
    background-position: -166px -480px;
}
.mui-content .uic15::before{
    background-position: -270px -480px;
}
.bgring{
    position: relative;
    background-color: #fff;
    width: 200%;
    height: 400px;
    border-radius: 50%;
    margin: 0 auto;
    top: -72px;
    left: -50%;
}
</style>
