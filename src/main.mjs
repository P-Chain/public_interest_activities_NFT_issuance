import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'mdb-vue-ui-kit/css/mdb.min.css'

// temp
// const Vue = require('vue');
// const App = require('../src/App.vue');
// const BootstrapVue = require('bootstrap-vue');
// const IconsPlugin = require('bootstrap-vue');
// require('bootstrap/dist/css/bootstrap.css');
// require('bootstrap-vue/dist/bootstrap-vue.css');
// require('mdb-vue-ui-kit/css/mdb.min.css');



// 라우터 별 vue 파일 import
import Main from './main/main.vue'
import Login from './log_in/Login.vue'
import SignUpSelection from './auth_account/SignUpSelection.vue'
import DirectorAccount from './auth_account/DirectorAccountPage.vue'
import UserAccount from './auth_account/UserAccountPage.vue'
import Ranking from './ranking/Ranking.vue'

// temp
// const Main = require('../src/main/Main.vue');

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
 // router 기능 확장 선언
Vue.use(VueRouter);

// 라우터 등록
var routes = [
    { path: '/', component: Main }, // 메인 페이지
    
    { path: '/login', component: Login }, // 로그인 페이지
    { path: '/auth_account', component: SignUpSelection }, // 로그인 -> 회원가입 페이지  
    { path: '/director_account', component: DirectorAccount }, // 회원가입 -> 발급 계정 폼 입력 페이지  
    { path: '/user_account', component: UserAccount }, // 회원가입 -> 사용자 계정 폼 입력 페이지

    { path: '/ranking', component: Ranking } // 랭킹 페이지
];

// 뷰 라우터 인스턴스 생성
var router = new VueRouter({
    routes
});

// 뷰 인스턴스 생성
new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')