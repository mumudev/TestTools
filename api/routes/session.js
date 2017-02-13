/*jshint esversion: 6 */
var express = require('express');
var Model = require('../models/User');
var wxApi = require('../util/wxApi');
var router = express.Router();
router.route('/:id?')
    .get(function(req, res) {
        var code = req.query.code;
        wxApi.getUserInfoByCode(code).then(function(result) {
            var openid = result.openid;
            var wx_info = result;
            var callback = function(err, obj) {
                if (err) {
                    return res.redirect('/login');
                }
                req.session.user = obj;
                return res.redirect('/');
            };
            Model.findOneAndUpdate({ openid }, { wx_info }, { upsert: true }, callback);
        }).catch(function(err) {
            console.log(err);
        });
    })
    .post(function(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        var callback = function(err, obj) {
            if (err) {
                return res.msg(0, 'Something error!');
            }
            if (!obj) {
                return res.msg(0, 'Login fail!');
            }
            req.session.user = obj;
            return res.msg(1, 'Login success!');
        };
        Model.findOne({
            username,
            password
        }).exec(callback);
    })
    .delete(function(req, res) {
        req.session.user = null;
        return res.msg(1, 'logout success!');
    });
module.exports = router;