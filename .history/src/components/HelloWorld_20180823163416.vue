<template>
  <div class="login_div">
    <mt-button id="wxsys" type="primary" v-on:click="sys_click()">扫一扫</mt-button>
  </div>
</template>

<script>
 import wx from 'weixin-js-sdk'
    import $ from 'jquery'
    export default {
        data(){
            return {
            }
        },
    methods : {
        sys_click : function()
        {
        //这里【url参数一定是去参的本网址】
        $.get("获取微信认证参数的地址?url=去参的本网页地址", function(data){
        var jsondata=$.parseJSON(data);
            wx.config({
                // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                debug: false,
                // 必填，公众号的唯一标识
                appId: jsondata.model.appId,
                // 必填，生成签名的时间戳
                timestamp: "" + jsondata.model.timestamp,
                // 必填，生成签名的随机串
                nonceStr: jsondata.model.nonceStr,
                // 必填，签名
                signature: jsondata.model.signature,
                // 必填，需要使用的JS接口列表，所有JS接口列表
                jsApiList: ['checkJsApi', 'scanQRCode']
            });
        });

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
