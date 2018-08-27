// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import wx from 'weixin-js-sdk'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.wxConfig = wxConfig;

/* eslint-disable no-newxs */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
