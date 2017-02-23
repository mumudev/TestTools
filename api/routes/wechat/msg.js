var wechat = require('wechat');
var wxConf = require('../../../conf').wechat;
var express = require('express');
var router = express.Router();
var config = {
    token: wxConf.token,
    appid: wxConf.appid
};

router.use(express.query());
router.use('/', wechat(config, function(req, res, next) {
    var message = req.weixin;
    res.reply({
        content: 'text object',
        type: 'text'
    });
}));
module.exports = router;