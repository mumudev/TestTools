var express = require('express');
var Model = require('../../models/User');
var router = express.Router();
var Payment = require('wechat-pay').Payment;
var middleware = require('wechat-pay').middleware;
var wxConf = require('../../../conf/wechat');

var initConfig = {
    appId: wxConf.appId,
    mchId: wxConf.mchId,
    notifyUrl: wxConf.notifyUrl,
    partnerKey: wxConf.partnerKey
};

var payment = new Payment(initConfig);

router.route('/:id?')
    .get(function(req, res) {
        payment.downloadBill({
            bill_date: "20170213",
            bill_type: "ALL"
        }, function(err, data) {
            // 账单列表
            // var list = data.list;
            // // 账单统计信息
            // var stat = data.stat;
        });
    })
    .post(function(req, res) {
        var order = {
            body: 'mumudeveloper',
            attach: 'mumudeveloper',
            out_trade_no: 'kfc' + (+new Date()),
            total_fee: 10 * 100,
            spbill_create_ip: req.ip,
            openid: req.user.openid,
            trade_type: 'JSAPI'
        };

        payment.getBrandWCPayRequestParams(order, function(err, payargs) {
            res.json(payargs);
        });
    })
    .delete(function(req, res) {
        payment.refund({
            out_trade_no: "kfc001",
            out_refund_no: 'kfc001_refund',
            total_fee: 10 * 100,
            refund_fee: 10 * 100
        }, function(err, result) {
            /**
             * 微信收到正确的请求后会给用户退款提醒
             * 这里一般不用处理，有需要的话有err的时候记录一下以便排查
             */
        });
    });
router.use('notify', middleware(initConfig).getNotify().done(function(message, req, res, next) {
    var openid = message.openid;
    var order_id = message.out_trade_no;
    var attach = {};
    try {
        attach = JSON.parse(message.attach);
    } catch (e) {}

    /**
     * 查询订单，在自己系统里把订单标为已处理
     * 如果订单之前已经处理过了直接返回成功
     */
    res.reply('success');

    /**
     * 有错误返回错误，不然微信会在一段时间里以一定频次请求你
     * res.reply(new Error('...'))
     */
}));
module.exports = router;