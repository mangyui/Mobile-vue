<template>
    <div class="topBottom">
        <div class="mui-navbar-inner mui-bar mui-bar-nav">
				<router-link to="/usercenter/user" type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
					<span class="mui-icon mui-icon-left-nav"></span>
				</router-link>
				<h1 class="mui-center mui-title">设置</h1>
        </div>
        <!--页面标题栏结束-->
        <!--页面主内容区开始-->
        <div class="mui-page-content">
            <div class="mui-scroll-wrapper">
                <div class="mui-scroll">
                    <ul class="mui-table-view mui-table-view-chevron">
                        <li class="mui-table-view-cell">
                            <a href="#account" class="mui-navigate-right">个人信息</a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a href="#about" class="mui-navigate-right">换绑手机 <i class="mui-pull-right update">100****0086</i></a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a href="#about" class="mui-navigate-right">社交账号绑定 <i class="mui-pull-right update">绑定/解绑</i></a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a href="#about" class="mui-navigate-right">登录密码<span class="strongpwd">强</span> <i class="mui-pull-right update">修改</i></a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a href="#account" class="mui-navigate-right">支付设置</a>
                        </li>
                    </ul>
                    <ul class="mui-table-view mui-table-view-chevron">
                        <li class="mui-table-view-cell">
                            <a href="#privacy" class="mui-navigate-right">安全中心</a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a href="#general" class="mui-navigate-right">通用</a>
                        </li>
                    </ul>
                    <ul class="mui-table-view mui-table-view-chevron">
                        <li class="mui-table-view-cell">
                            <a href="#about" class="mui-navigate-right">关于美团 <i class="mui-pull-right update">v9.6.6</i></a>
                        </li>
                    </ul>
                    <ul class="mui-table-view btnout">
                        <li class="mui-table-view-cell" style="text-align: center;">
                            <a>退出账户</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        this.todo();
    },
    methods:{
         todo(){

         }
    }
}
</script>

<style scoped>
  .mui-scroll-wrapper
  {
      top: 50px;
      bottom: 55px;
  }	
  
  .mui-bar-tab{
      display: none;
  }
  .mui-table-view {
    margin-top: 10px;
    position: static;
}
  .update {
    font-style: normal;
    color: #999999;
    margin-right: -25px;
    font-size: 14px;
}
  .mui-scroll .mui-navigate-right{
     padding-top: 15px;
     padding-bottom: 15px;
  }
  .mui-table-view-cell:after {
    left: 0;
    background-color: #e0dfdf;
}
  .mui-bar .mui-title
  {
    right: unset;;
  }
  .topBottom .mui-bar-nav{
      box-shadow: 0 0;
      border-bottom: 1px solid #ccc;
  }
  .btnout{
    margin: 20px 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    box-shadow: 0 1px 2px #ccc;
  }
  .mui-table-view::before,
  .mui-table-view::after{
      position: static;
  }
  .strongpwd{
      color: rgb(236, 66, 14);
      font-size: 19px;
      margin-left: 15px;
  }
</style>
