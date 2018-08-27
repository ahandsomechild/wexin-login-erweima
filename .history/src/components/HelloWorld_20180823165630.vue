<template>
  <div class="login_div">
    <div id="login_container"></div>
    <button id="wxsys" type="primary" v-on:click="sys_click()">扫一扫</button>
  </div>
</template>

<script>
import wx from "weixin-js-sdk";
import $ from "jquery";
export default {
  data() {
    return {};
  },
  created(){
    wx.config({
        id:"login_container", // 需要显示的容器id
        appid: "wx0c05ce174cd624b7",  // 公众号appid wx*******
        scope: "snsapi_login",  // 网页默认即可
        redirect_uri: "http%3a%2f%2fhxy.niezhiliang.com%2fcallback", // 授权成功后回调的url
        state: "", // 可设置为简单的随机数加session用来校验
        style: "black", // 提供"black"、"white"可选。二维码的样式
        href: "" // 外部css文件url，需要https
    });
  }
  // methods: {
  //   sys_click: function() {
  //     //这里【url参数一定是去参的本网址】
  //     $.get("http%3a%2f%2fhxy.niezhiliang.com%2fcallback", function(data) {
  //       var jsondata = $.parseJSON(data);
  //       wx.config({
  //         // self_redirect:false,//true将页面跳转放在ifream里面   false直接跳转到要跳转的页面
  //         // id:"obj",
  //         // appid: "wx0c05ce174cd624b7",
  //         // scope: "snsapi_login",
  //         // redirect_uri: "http%3a%2f%2fhxy.niezhiliang.com%2fcallback",
  //         // state: "",
  //         // style: "",
  //         // href: "",
  //         // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  //         debug: false,
  //         // 必填，公众号的唯一标识
  //         appId: "wx0c05ce174cd624b7",
  //         // 必填，生成签名的时间戳
  //         timestamp: "" + jsondata.model.timestamp,
  //         // 必填，生成签名的随机串
  //         nonceStr: jsondata.model.nonceStr,
  //         // 必填，签名
  //         signature: jsondata.model.signature,
  //         // 必填，需要使用的JS接口列表，所有JS接口列表
  //         jsApiList: ["checkJsApi", "scanQRCode"]
  //       });
  //     });
  //     wx.error(function(res) {
  //       alert("出错了：" + res.errMsg); //这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
  //     });

  //     wx.ready(function() {
  //       wx.checkJsApi({
  //         jsApiList: ["scanQRCode"],
  //         success: function(res) {}
  //       });

  //       wx.scanQRCode({
  //         needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
  //         scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
  //         success: function(res) {
  //           var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
  //           alert("扫描结果：" + result);
  //           window.location.href = result; //因为我这边是扫描后有个链接，然后跳转到该页面
  //         }
  //       });
  //     });
  //   }
  // }
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
