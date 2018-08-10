//导入vue核心包
import Vue from 'vue';

//导入app.vue的vue对象
import App from './App.vue';

//将vue-router集成到这个项目中
import vueRouter from 'vue-router';

Vue.use(vueRouter);

import home from './components/home.vue';
import cart from './components/shopcart/cart.vue';
import news from './components/news/newslist.vue';
import user from './components/usercenter/user.vue';
import disimg from './components/other/disimg.vue';

var router1 =new vueRouter({
    linkActiveClass:'mui-active',
    routes:[
       {path:'/home',component:home},
       {path:'/cart',component:cart},
       {path:'/news/newslist',component:news},
       {path:'/usercenter/user',component:user},
       {path:'/disimg/:id',component:disimg}
    ]
});


import 'mint-ui/lib/style.min.css';

import mintui from 'mint-ui';
//在vue全局使用mintui
Vue.use(mintui);

import '../statics/mui/css/mui.css';

import '../statics/css/site.css';

import vueResource from 'vue-resource';
Vue.use(vueResource);

new Vue({
    el:'#app',
    data:{
        pp:'123'
    },
    router:router1,
    render:c=>c(App)
})