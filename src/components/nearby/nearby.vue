<template>
    <div class="topBottom">
        <!--vue2.0根-->
        <header id="header" class="mui-bar mui-bar-transparent">
            <router-link to="/location" class="location">666县道附近
                <span class="mui-icon mui-icon-arrowdown"></span>
            </router-link>
            <div class="mui-title">
                <a class="mui-icon mui-icon-search asear"></a>
                <input type="text" class="isearch mui-icon-search" placeholder="找附近的吃喝玩乐">
            </div>
        </header>
        <div class="card">
             <img class="active-card" src="../../../statics/images/im35.jpeg" alt="CARD">
             <img src="../../../statics/images/im35.jpeg" alt="CARD">
        </div>
    </div>
</template>

<script>
import common from "../../kits/common.js";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
#header {
  background-color: #f9f9f9;
  border-bottom: 1px solid #ccc;
}
#header .location {
  color: #444;
  font-size: 14px;
  display: inline-block;
  height: 44px;
  line-height: 44px;
  padding-left: 10px;
}
#header .location span.mui-icon {
  font-size: 16px;
}
.mui-bar .mui-title {
  width: 60%;
  margin: 0 2%;
  right: 10px;
  left: auto;
}
.isearch {
  border-radius: 2px;
  padding: 8px;
  font-size: 0.7em;
  text-align: left;
  padding-left: 30px;
  height: 24px;
  border: none;
  background-color: rgba(200, 200, 200, 0.3);
}
#header .mui-title .asear {
  position: absolute;
  top: 50%;
  top: 50%;
  margin-top: -9px;
  font-size: 16px;
  left: 8px;
}
.topBottom {
  margin: 50px 0 55px;
}
.card{
    width: 180%;
    padding: 15px;
}
.card img{
    width: 280px;
    height: 150px;
    border-radius: 20px;
    box-shadow: 0 10px 20px #aaa;
    margin-left: 10px;
}
.card .active-card{
    width: 300px;
    height: 170px;   
}
</style>
