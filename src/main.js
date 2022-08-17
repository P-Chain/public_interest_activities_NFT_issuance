import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Main from './main/main.vue'
import Login from './log_in/Login.vue'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
 // router 기능 확장 선언
Vue.use(VueRouter);


var routes = [ // 이곳에 router 를 등록할 것 입니다.
    { path: '/', component: Main },
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