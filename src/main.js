import Vue from 'vue'
import App from './App.vue'

var Main = { template: '<div>main</div>'};
var Login = { template: '<div>login</div>'};

Vue.use(VueRouter); // router 기능 확장 선언

var routes = [ // 이곳에 router 를 등록할 것 입니다.
    { path: '/main', component: Main },
    { path: '/login', component: Login }
];

var router = new VueRouter({
    routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')