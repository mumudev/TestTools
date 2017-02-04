/*jshint esversion: 6 */
import Vue from 'vue';
import home from './pages/home.vue';
import order from './pages/order.vue';
import login from './pages/login.vue';
import error from './pages/error.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routeConfig from './router-config';
import store from './store';
import ElementUI from 'element-ui';


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

//定义路由
// const router = new VueRouter({
//   routes: routeConfig
// });
var app = new Vue({
  el: '#app',
  // router,
  store,
  template: '<component v-bind:is="currentView" :pages="pages"></component>',
  data: function () {
    return {
      currentView: home,
      pages: [{
        name: 'home',
        icon: 'home',
        url: '#/redirect/home'
      }, {
        name: 'order',
        icon: 'block layout',
        url: '#/redirect/order'
      }]
    };
  }
});