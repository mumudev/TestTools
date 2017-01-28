/*jshint esversion: 6 */
import Vue from 'vue';
import Home from './pages/home.vue';
import order from './pages/order.vue';
import login from './pages/login.vue';
import NotFound from './pages/notFound.vue';
import { Router } from 'director';
import { Button, Table, Pagination, Form, NavMenu } from 'element-ui';
Vue.use(Button);
Vue.use(Table);
Vue.use(Pagination);
Vue.use(Form);
Vue.use(NavMenu);

var app = new Vue({
    el: '#app',
    template: '<component v-bind:is="currentView" :pages="pages"></component>',
    data: function () {
        return {
            currentView: Home,
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
    '/home': function () {
        app.currentView = Home;
    },
    '/login': function () {
        app.currentView = login;
    },
    '/order': function () {
        app.currentView = order;
    },
    '/redirect/:url1/:url2': function (url1, url2) {
        var url = url1 + '/' + url2;
        app.currentView = Home;
        router.setRoute(url);
    },
    '/redirect/:url1': function (url1) {
        app.currentView = Home;
        router.setRoute(url1);
    },
    '/error': {
        '/notfound': function () {
            app.currentView = NotFound;
        }
    }
});
//页面未找到
router.configure({
    notfound: function () {
        router.setRoute('/error/notfound');
    }
});
router.init('/home');