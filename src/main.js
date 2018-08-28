// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vc from 'vue-cookie'
import store from './store'
import {mapMutations} from 'vuex'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(window.location.href.indexOf('testid')>=0){
    alert("hahahahahahhahahahah")
    let code = window.location.href.split("?")[1];
    console.log("code1==========="+code)
    code = code.substring(7,code.indexOf('&'));
    console.log("code2============="+code)
    // alert("code===========")
    // store.userInfo.code = code;
    // this.$store.commit('getcode',code)
    vc.set('code', code, 1)
  }

  // if(to.path == '/login' && store.state.user) {
  //   next('/')
  //   return false
  // }else if((!vc.get("code") || !store.state.user) && to.path != '/login'){
  //   // 第一次进入项目
  //   //store.state.beforeLoginUrl = to.fullPath; // 保存用户进入的url
  //   next('/login')
  //   return false
  // }else if(!store.state.user && to.path != '/login'){
  //   // 之前有获取过授权
  //   next('/login')
  //   return false
  // }
  next()
})


/* eslint-disable no-newxs */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
