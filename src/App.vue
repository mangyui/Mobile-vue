<template>
    <div>    <!--vue2.0根-->
          <!---->
       <mt-header fixed title="盲鱼的移动商城"></mt-header>
         
      <router-view></router-view>

        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
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

</style>
