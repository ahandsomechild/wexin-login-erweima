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
    var login = wx.config({
        id:"login", // 需要显示的容器id
        appid: "wx0c05ce174cd624b7",  // 公众号appid wx*******
        scope: "snsapi_login",  // 网页默认即可
        redirect_uri: "http%3a%2f%2fhxy.niezhiliang.com%2fcallback", // 授权成功后回调的url
        state: "", // 可设置为简单的随机数加session用来校验
        style: "", // 提供"black"、"white"可选。二维码的样式
        href: "" // 外部css文件url，需要https
    });
    wx.ready(function(){

    })
    wx.error()
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
