import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Jazzicon from 'vue-jazzicon'


// import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'mdb-vue-ui-kit/css/mdb.min.css'

// 라우터 별 vue 파일 import
import Main from './main/main.vue'


import LoginPage from './log_in/LoginPage.vue'
import AuthAccount from './auth_account/AuthAccount.vue'
import DirectorAccount from './auth_account/director_account/DirectorAccountPage.vue'
import UserAccount from './auth_account/user_account/UserAccountPage.vue'
import Ranking from './ranking/Ranking.vue'
import AuthApply from './auth_apply/AuthApply.vue'
import MyPage from './mypage/MyPage.vue'
import VmsIns from './vms_ins/VmsIns.vue'
import NFTChoice from './nft_choice/NFTChoice.vue'
import UserSearch from './user_search/UserSearch.vue'
import NFTIssue from './nft_issue/NFTIssue.vue'
import ManagePage from './manage_page/ManagePage.vue'
import Progress from './progress/Progress.vue'
import Achieved from './progress/achieved/achieved.vue'
import MyOwnNFT from './progress/my_own_NFT/MyOwnNFT.vue'
import NotAchieved from './progress/not_achieved/NotAchieved.vue'
import ProgressAll from './progress/progress_all/ProgressAll.vue'




// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// router 기능 확장 선언
Vue.use(VueRouter);

// Jazzicon 컴포넌트 등록
Vue.component('jazzicon', Jazzicon);

// 이벤트 버스 선언
Vue.prototype.$EventBus = new Vue();

// URL
var BACKURL = 'http://pchapi.loca.lt'


// 라우터 등록
var routes = [

    // 메인 페이지
    { path: '/', component: Main },

    // 로그인 페이지
    { path: '/login', component: LoginPage },

    // 로그인 -> 회원가입 페이지
    { path: '/auth_account', component: () => import(/* webpackChunkName: "auth" */ './auth_account/AuthAccount.vue') },  
    
    // 회원가입 -> 발급 계정 폼 입력 페이지 
    { path: '/auth_account/director_account', component: () => import(/* webpackChunkName: "auth" */ './auth_account/director_account/DirectorAccountPage.vue') }, 
    
    // 회원가입 -> 사용자 계정 폼 입력 페이지
    { path: '/auth_account/user_account', component: () => import(/* webpackChunkName: "auth" */ './auth_account/user_account/UserAccountPage.vue') }, 
    
    // 랭킹 페이지
    { path: '/ranking', component: () => import(/* webpackChunkName: "ranking" */ './ranking/Ranking.vue') }, 
    
    // 마이 페이지
    { path: '/mypage', component: () => import(/* webpackChunkName: "mypage" */ './mypage/MyPage.vue') }, 
    
    // 마이 페이지 -> 권한 신청 페이지
    { path: '/auth_apply', component: () => import(/* webpackChunkName: "mypage" */ './auth_apply/AuthApply.vue') }, 
    
    // 마이 페이지 -> 봉사시간 인증 페이지
    { path: '/vms_ins', component: () => import(/* webpackChunkName: "mypage" */ './vms_ins/VmsIns.vue') }, 
    
    // 발급할 NFT 선택 페이지 (권한 보유자)
    { path: '/nft_choice', component: () => import(/* webpackChunkName: "nftchoice" */ './nft_choice/NFTChoice.vue') }, 
    
    // * -> 발급할 사용자 선택 페이지
    { path: '/user_search', component: () => import(/* webpackChunkName: "nftchoice" */ './user_search/UserSearch.vue') }, 
    
    // * -> 발급 신청 페이지
    { path: '/nft_issue', component: () => import(/* webpackChunkName: "nftchoice" */ './nft_issue/NFTIssue.vue') }, 
    
    // 관리자 페이지 -> NFT 발급 승인 페이지, 봉사시간 승인 페이지, 발급권한 부여 페이지 (탭)
    { path: '/manage_page', component: () => import(/* webpackChunkName: "manage" */ './manage_page/ManagePage.vue') }, 
    
    // 진행 정보 페이지
    { path: '/progress', component: () => import(/* webpackChunkName: "progress" */ './progress/Progress.vue') }, 
    
    // 진행 정보 페이지 -> 달성 업적 페이지
    { path: '/progress/achieved', component: () => import(/* webpackChunkName: "progress" */ './progress/achieved/achieved.vue') }, 
    
    // 진행 정보 페이지 -> 보유 NFT 페이지
    { path: '/progress/my_own_NFT', component: () => import(/* webpackChunkName: "progress" */ './progress/my_own_NFT/MyOwnNFT.vue') }, 
   
    // 진행 정보 페이지 -> 미달성 업적 페이지
    { path: '/progress/not_achieved', component: () => import(/* webpackChunkName: "progress" */ './progress/not_achieved/NotAchieved.vue') }, 
    
    // 진행 정보 페이지 -> 진행도 페이지
    { path: '/progress/progress_all', component: () => import(/* webpackChunkName: "progress" */ './progress/progress_all/ProgressAll.vue') }, 
    
    // // 커뮤니티 페이지
    // {},
    
    // // 커뮤니티 -> 작성 페이지
    // {},
    
    // // 커뮤니티 -> 게시물 페이지
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