

import Vuex from 'vuex'
import Vue from 'vue'
import userInfo from './userinfo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInfo
  }
})
