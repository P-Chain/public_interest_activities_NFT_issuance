// 전역 변수, 함수 등을 관리하는 vue 프론트엔드 js 파일
import Vue from "vue"
import Vuex from "vuex"

// Vuex 선언
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: false
  },
  getters: {

  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    }
  },
  actions: {

  },
  modules: {

  }
})