import vc from 'vue-cookie'
// import http from '../components/http.js'

export default {
  state: {
    userInfo: vc.get('userInfo') ? JSON.parse(vc.get('userInfo')) : {},
    code:vc.get('code')? JSON.parse(vc.get('code')) : {}
  },
  mutations: {
    login (state, payload) {
      state.userInfo = payload.userInfo
      state.userInfo.token = payload.token
      vc.set('userInfo', JSON.stringify(state.userInfo), 1)
    },
    getcode(state,payload){
        state.code = payload
        // vc.set('code', JSON.stringify(state.code), 1)
    },
    logout (state) {
      vc.set('userInfo', '', 1)
      state.userInfo = ''
      // 刷新
      window.location.reload()
    }
  },
  actions: {
    login ({ commit }, info) {
      return http.post('/token-manager/unchk/auth/login/in', info).then(res => {
        if (res.data && res.data.status === 20) {
          commit('login', {
            userInfo: res.data.content,
            token: res.data.content.token
          })
          // vc.set('userInfo', res.data.content, 1)
        }
        return res
      })
    }
  }
}
