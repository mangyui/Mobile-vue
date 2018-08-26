<template>
    <div>    <!--vue2.0根-->
          <!---->
       <!-- <mt-header fixed title="盲鱼的移动商城">
		    <router-link to="/home" slot="left" class="toleft"> 
			<mt-button icon="back">返回</mt-button></router-link>
            <mt-button icon="more" slot="right"></mt-button>
	   </mt-header>
    
	     <header id="header" class="mui-bar mui-bar-transparent">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">盲鱼的移动商城</h1>
		</header> -->

      <router-view></router-view>

        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon tic1"></span>
				<span class="mui-tab-label">首页</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/sider">
				<span class="mui-icon tic2"></span>
				<span class="mui-tab-label">附近</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/news/newslist">
				<span class="mui-icon tic3"></span>
				<span class="mui-tab-label">发现</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/cart">
				<span class="mui-icon tic4"></span>
				<span class="mui-tab-label">订单</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/usercenter/user">
				<span class="mui-icon tic5"></span>
				<span class="mui-tab-label">我的</span>
			</router-link >
		</nav>  
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg:'hello'
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: Muiicons;
    font-weight: normal;
    font-style: normal;

    src: url("../statics/mui/fonts/mui.ttf") format('truetype');
}
	.mint-header
	{
		background-color: rgb(37, 173, 180);
	}
	.mui-bar
	{
		background-color: #fff;
	   box-shadow: 0 0 1px rgba(0, 0, 0, .2);
	}
	.mui-bar .mui-icon::before
{
    content: '';
    background: url("../statics/images/tabar.png");
    display: inline-block;
    width: 30px;
    height: 30px;
    background-size: 1400%;
    margin-left: -2px;
}
.mui-bar .tic1::before{
    background-position: -31px -60px;
}
.mui-bar .tic2::before{
    background-position: -112px -60px;
}
.mui-bar .tic3::before{
    background-position: -194px -60px;
}
.mui-bar .tic4::before{
    background-position: -275px -60px;
}
.mui-bar .tic5::before{
    background-position: -357px -60px;
}
.mui-bar-tab .mui-tab-item.mui-active .mui-icon::before
{
	background-position-y: -5px;
}
.mui-bar-tab .mui-tab-item.mui-active
{
	color: rgb(37, 173, 180);
}
</style>
