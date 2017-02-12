/*jshint esversion: 6 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import request from './methods/request';
Vue.use(ElementUI);

var app = new Vue({
    el: '#login',
    data() {
        var validateUsername = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                callback();
            }
        };
        var validatePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        return {
            loginForm: {
                username: '',
                password: ''
            },
            rules2: {
                username: [
                    { validator: validateUsername, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePassword, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            let username = this.loginForm.username;
            let password = this.loginForm.password;
            this.$refs[formName].validate((valid) => {
                if (!valid) {
                    return false;
                }
                request.login({
                    username,
                    password
                }).then((data) => {
                    if (data.code === 1) {
                        window.location = '/';
                    } else {
                        alert('账号密码错误！，请重新登录！');
                        return false;
                    }
                });
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
});