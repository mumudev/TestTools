/*jshint esversion: 6 */
import Vue from 'vue';
import Home from './pages/home.vue';
import order from './pages/order.vue';
import NotFound from './pages/notFound.vue';
import { Router } from 'director';

var app = new Vue({
    el: '#app',
    template: '<component v-bind:is="currentView" :pages="pages"></component>',
    data: function () {
        return {
            currentView: Home,
            pages: [{
                name: '主页',
                icon: 'home',
                url: '#/redirect/home'
            }, {
                name: '订单管理',
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