<template>
  <div class="login_div">
    <button @click="login">微信登录</button>
    <!-- <div id="obj" style="text-align: center"></div> -->
  </div>
</template>

<script>
// import wx from "weixin-js-sdk";
import $ from "jquery";

export default {
  data() {
    return {
      appid: 'wx0c05ce174cd624b7',
      redirect_uri: 'http%3a%2f%2fhxy.niezhiliang.com%2fcallback',
      url:''
    };
  },
  created(){
    this.url = 'https://open.weixin.qq.com/connect/qrconnect?appid='+this.appid + '&redirect_uri='+ this.redirect_uri +'&response_type=code&scope=snsapi_login#wechat_redirect';
    
  },
  methods:{
    login(){
      // let userInfo = Cookie.get('userInfo')
      // if(userInfo){

      // }else{
          window.open (this.url,'newwindow', 'height=500, width=400, top=0, left=0, toolbar=no, menubar=no,scrollbars=no, resizable=no,location=no, status=no')
      // }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
