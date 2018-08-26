<template>
    <div class="topBottom">    <!--vue2.0根-->
    <header id="header" class="mui-bar mui-bar-transparent">    
			<h1 class="mui-title">发现</h1>
		</header>

    <div v-for="item in list" class="mui-card">             
				<div class="mui-card-header mui-card-media" :style="{height:'40vw', background:'url('+item.img_url+') no-repeat', 'background-size': '100%'}">
                    <p>{{item.title}}</p>
                </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">

						<p class="ft">
                             <span>{{item.addtime}}</span>
                            <span class="click">点击量：{{item.click}}</span>
                        </p>
						<p style="color: #333;" v-text="item.zhaiyao"></p>
					</div>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">Like</a>
					<a class="mui-card-link">Read more</a>
				</div>
			</div>
            <p class="pbottom">—— 我是有底线的 ——</p>
      </div>
</template>

<script>
import common from '../../kits/common.js';
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.getnewlist();
    },
    methods:{
        getnewlist(){
            this.list=[
                {
                    "id":1,
                    "title":"2018年一级甜品师",
                    "addtime":"2018-08-08 16:43:00",
                    "zhaiyao":"2018年第一家甜品店第一级别甜品厨师的摘要",
                    "click":1,
                    "img_url":common.apidomain+"/DessertShop/images/team/team-1.jpg"
                },
               {
                    "id":2,
                    "title":"2018年二级甜品师",
                    "addtime":"2018-08-08 16:42:00",
                    "zhaiyao":"2018年第二家甜品店第二级别甜品厨师的摘要",
                    "click":2,
                    "img_url":common.apidomain+"/DessertShop/images/team/team-2.jpg"
                },
                {
                    "id":1,
                    "title":"2018年三级甜品师",
                    "addtime":"2018-08-08 16:41:00",
                    "zhaiyao":"2018年第三家甜品店第三级别甜品厨师的摘要",
                    "click":3,
                    "img_url":common.apidomain+"/DessertShop/images/team/team-3.jpg"
                }
            ]
        }
    }
   
}
</script>

<style scoped>
   #header{
       background-color: #fff;
       border-bottom: 1px solid #ccc;
   }
   #header h1{
       font-weight: bold;
   }
  .topBottom
  {
          margin: 45px 0 55px;
  }
  .mui-card-header.mui-card-media
  {
      padding: 0;
  }
  .mui-card-media
  {
      position: relative;
  }
  .mui-card-media p
  {
      color: #fff;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 36px;
      font-size: 1.1em;
      line-height: 36px;
      background-color: rgba(27, 28, 75,.8);
      text-align: center;
  }
   /* .ft{
       margin-top: 1.5em;
       font-size: 12px;
       color: dimgray;
   }*/

   .ft .click{
       float: right;
   } 
   .pbottom{
       text-align: center;
       margin: 24px auto;
       font-size: 0.6em;
   }
</style>
