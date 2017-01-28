/*jshint esversion: 6 */
import Vue from 'vue';
import Home from './pages/home.vue';
import order from './pages/order.vue';
import login from './pages/login.vue';
import NotFound from './pages/notFound.vue';
import { Router } from 'director';
import { Button, Table, Pagination, Form, Submenu } from 'element-ui';

Vue.use(Form);
Vue.use(Table);
Vue.use(Button);
Vue.use(Submenu);
Vue.use(Pagination);

var app = new Vue({
    el: '#app',
    template: '',
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
    '/login': function () {
        app.currentView = login;
    },
    '/home': function () {
        app.currentView = Home;
    },
    '/order': function () {
        app.currentView = order;
    },
    '/redirect/?([^\/]*)\/([^\/]*)/?': function (url1, url2) {
        var url = url2 ? url1 + '/' + url2 : url1;
        app.currentView = Home;
        router.setRoute(url);
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