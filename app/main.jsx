/*jshint esversion: 6 */
import Vue from 'vue';
import home from './pages/home.vue';
import order from './pages/order.vue';
import login from './pages/login.vue';
import error from './pages/error.vue';
import { Router } from 'director';
import { Button, Table, Pagination, Input, Form, FormItem, Submenu } from 'element-ui';

Vue.use(Form);
Vue.use(Input);
Vue.use(Table);
Vue.use(Button);
Vue.use(Submenu);
Vue.use(FormItem);
Vue.use(Pagination);

var app = new Vue({
    el: '#app',
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

var router = Router({
    '/login'() {
        app.currentView = login;
    },
    '/home'() {
        app.currentView = home;
    },
    '/order'() {
        app.currentView = order;
    },
    '/redirect/?([^\/]*)\/([^\/]*)/?'(url1, url2) {
        var url = url2 ? url1 + '/' + url2 : url1;
        app.currentView = home;
        router.setRoute(url);
    },
    '/error': {
        '/notfound'() {
            app.currentView = error;
        }
    }
});

//页面未找到
router.configure({
    notfound() {
        router.setRoute('/error/notfound');
    }
});

router.init('/home');