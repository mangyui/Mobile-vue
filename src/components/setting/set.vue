<template>
    <div class="topBottom">
        <div class="mui-navbar-inner mui-bar mui-bar-nav">
				<button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
					<span class="mui-icon mui-icon-left-nav"></span>
				</button>
				<h1 class="mui-center mui-title">设置</h1>
        </div>
        <!--页面标题栏结束-->
        <!--页面主内容区开始-->
        <div class="mui-page-content">
            <div class="mui-scroll-wrapper">
                <div class="mui-scroll">
                    <ul class="mui-table-view mui-table-view-chevron">
                        <li class="mui-table-view-cell mui-media">
                            <a class="mui-navigate-right" href="#account">
                                <img class="mui-media-object mui-pull-left head-img" id="head-img" src="">
                                <div class="mui-media-body">
                                    Hello MUI
                                    <p class='mui-ellipsis'>账号:hellomui</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul class="mui-table-view mui-table-view-chevron">
                        <li class="mui-table-view-cell">
                            <a href="#account" class="mui-navigate-right">账号与安全</a>
                        </li>
                    </ul>
                    <ul class="mui-table-view mui-table-view-chevron">
                        <li class="mui-table-view-cell">
                            <a href="#notifications" class="mui-navigate-right">新消息通知</a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a href="#privacy" class="mui-navigate-right">隐私</a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a href="#general" class="mui-navigate-right">通用</a>
                        </li>
                    </ul>
                    <ul class="mui-table-view mui-table-view-chevron">
                        <li class="mui-table-view-cell">
                            <a href="#about" class="mui-navigate-right">关于MUI <i class="mui-pull-right update">V3.1.0</i></a>
                        </li>
                    </ul>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell" style="text-align: center;">
                            <a>退出登录</a>
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
</style>
