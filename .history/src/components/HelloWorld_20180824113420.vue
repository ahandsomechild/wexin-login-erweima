<template>
  <div class="login_div">
    <div id="login" style="text-align: center"></div>
  </div>
</template>

<script>
import wx from "weixin-js-sdk";
import $ from "jquery";

export default {
  data() {
    return {};
  },
  mounted(){
    var obj = new WxLogin({
        self_redirect:false,//true将页面跳转放在ifream里面   false直接跳转到要跳转的页面
        id:"obj",
        appid: "wx0c05ce174cd624b7",
        scope: "snsapi_login",
        redirect_uri: "http%3a%2f%2fhxy.niezhiliang.com%2fcallback",
        state: "",
        style: "",
        href: ""
    });
    // var login = wx.login({
    //     self_redirect:false,//true将页面跳转放在ifream里面   false直接跳转到要跳转的页面
    //     id:"login",
    //     appid: "wx0c05ce174cd624b7",
    //     scope: "snsapi_login",
    //     redirect_uri: "http%3a%2f%2fhxy.niezhiliang.com%2fcallback",
    //     state: "",
    //     style: "",
    //     href: ""
    // });
    // wx.ready(function(){

    // })
    // wx.error(function(){

    // })
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
