/*jshint esversion: 6 */
import Vue from 'vue';
import order from './components/order.vue';
import error from './components/error.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routeConfig from './router';
import store from './store';
import ElementUI from 'element-ui';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

const router = new VueRouter({
  routes: routeConfig
});
var app = new Vue({
  el: '#app',
  router,
  store,
  data: function () {
    return {
    };
  }
});