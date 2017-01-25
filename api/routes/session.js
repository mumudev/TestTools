/*jshint esversion: 6 */
var express = require('express');
var Model = require('../models/User');
var router = express.Router();
router.route('/:id?')
    .get(function(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        var callback = function(err, obj) {
            if (err) {
                return res.msg(0, 'Something error!');
            }
            if (!obj) {
                return res.msg(0, 'Login fail!');
            }
            res.session.user = obj;
            return res.msg(1, 'Login success!');
        };
        Model.findOne({
            username,
            password
        }).exec(callback);
    })
    .delete(function(req, res) {
        res.session.user = null;
    });
module.exports = router;