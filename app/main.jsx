/**
 * Created by Mumudeveloper.
 *
 */
/*jshint esversion: 6 */
import Vue from 'vue';
import Home from './pages/home.vue';
import order from './pages/order.vue';
import order_unmark from './pages/order_unmark.vue';
import order_unhandle from './pages/order_unhandle.vue';
import order_interface from './pages/order_interface.vue';
import order_transfer from './pages/order_transfer.vue';
import NotFound from './pages/notFound.vue';
import { Router } from 'director';

var app = new Vue({
    el: '#app',
    data: function () {
        return {
            currentView: Home,
            pages: [{
                name: '主页',
                icon: 'home',
                url: '#/redirect/home',
            }, {
                name: '未标记',
                icon: 'block layout',
                url: '#/redirect/order/unmark',
            }, {
                name: '未处理',
                icon: 'block layout',
                url: '#/redirect/order/unhandle',
            }, {
                name: '转移订单',
                icon: 'block layout',
                url: '#/redirect/order/transfer',
            }, {
                name: '订单管理',
                icon: 'block layout',
                url: '#/redirect/order',
            }, {
                name: '接口管理',
                icon: 'smile',
                url: '#/redirect/order/interface',
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
    '/order/transfer': function () {
        app.currentView = order_transfer;
    },
    '/order/unmark': function () {
        app.currentView = order_unmark;
    },
    '/order/unhandle': function () {
        app.currentView = order_unhandle;
    },
    '/order/interface': function () {
        app.currentView = order_interface;
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