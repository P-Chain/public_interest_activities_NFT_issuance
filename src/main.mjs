import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';

// 라우터 별 vue 파일 import
import Main from './main/main.vue'
import Login from './log_in/Login.vue'
import SignUpSelection from './auth_account/SignUpSelection.vue'
import DirectorAccount from './auth_account/DirectorAccountPage.vue'
import UserAccount from './auth_account/UserAccountPage.vue'
import Ranking from './ranking/Ranking.vue'
import AuthApply from './auth_apply/AuthApply.vue'
import MyPage from './mypage/MyPage.vue'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
 // router 기능 확장 선언
Vue.use(VueRouter);

// 라우터 등록
var routes = [
    // 메인 페이지
    { path: '/', component: Main },
    // 로그인 페이지
    { path: '/login', component: Login },
    // 로그인 -> 회원가입 페이지
    { path: '/auth_account', component: SignUpSelection },  
    // 회원가입 -> 발급 계정 폼 입력 페이지 
    { path: '/director_account', component: DirectorAccount },
    // 회원가입 -> 사용자 계정 폼 입력 페이지
    { path: '/user_account', component: UserAccount },
    // 랭킹 페이지
    { path: '/ranking', component: Ranking },
    // 마이 페이지
    { path: '/mypage', component: MyPage },
    // 마이 페이지 -> 권한 신청 페이지
    { path: '/auth_apply', component: AuthApply },
    // // 마이 페이지 -> 봉사시간 인증 페이지
    // {},
    // // 발급할 NFT 선택 페이지 (권한 보유자)
    // {},
    // // * -> 발급할 사용자 선택 페이지
    // {},
    // // * -> 발급 신청 페이지
    // {},
    // // 커뮤니티 페이지
    // {},
    // // 커뮤니티 -> 작성 페이지
    // {},
    // // 커뮤니티 -> 게시물 페이지
    // {},
    // // 관리자 전용 페이지 (관리자)
    // {},
    // // 관리자 전용 페이지 -> NFT 발급 승인 페이지
    // {},
    // // 관리자 전용 페이지 -> 봉사시간 승인 페이지
    // {},
    // // 관리자 전용 페이지 -> 발급권한 부여 페이지
    // {},
];

// 뷰 라우터 인스턴스 생성
var router = new VueRouter({
    routes,
    mode: "history"
});

// 뷰 인스턴스 생성
new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')