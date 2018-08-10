<template>
    <div class="topBottom">    <!--vue2.0根-->
     <header id="header" class="mui-bar mui-bar-transparent">
			<h1 class="mui-title">我的订单</h1>
		</header>
     <div class="mui-content">
       <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/news/newslist">
		            <span class="mui-icon mui-icon-star-filled"></span>
		              <div class="mui-media-body">待付款</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/photos/photoslist">
		              <span class="mui-icon mui-icon-chat"></span>
		                <div class="mui-media-body">带使用</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/goods/goodsslist">
		               <span class="mui-icon mui-icon-eye"></span>
		             <div class="mui-media-body">待评价</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/photos/photoslist">
		              <span class="mui-icon mui-icon-chat"></span>
		                <div class="mui-media-body">退款/售后</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/goods/goodsslist">
		               <span class="mui-icon mui-icon-eye"></span>
		             <div class="mui-media-body">全部订单</div></router-link></li>
		</ul>
      </div>
      </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
 .mui-title
 {
   font-weight: bold;
 }
 .mui-content > .mui-table-view:first-child
  {
      margin-top: 0;
  }
  .mui-content,.mui-content ul{
      background-color: transparent;
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
      color: rgb(231, 151, 45);
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell
  {
      padding: 11px 0;
  }
   .mui-col-xs-3 {
    width: 20%;
}
</style>
