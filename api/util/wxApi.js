var OAuth = require('wechat-oauth');
var Token = require('../models/Token');
var wxConf = require('../../conf').wechat;
var client = new OAuth(wxConf.appid, wxConf.appSecret, function(openid, callback) {
    // 传入一个根据openid获取对应的全局token的方法
    // 在getUser时会通过该方法来获取token
    Token.getToken(openid, callback);
}, function(openid, token, callback) {
    // 持久化时请注意，每个openid都对应一个唯一的token!
    Token.setToken(openid, token, callback);
});
var getAccessToken = function(code) {
    return new Promise(function(resolve, reject) {
        client.getAccessToken(code, function(err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}
var getUser = function(openid) {
    if (typeof(openid) === "object") {
        openid = openid.openid;
    }
    return new Promise(function(resolve, reject) {
        client.getUser(openid, function(err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = {
    getUserInfoByCode: function(code) {
        return getAccessToken(code).then(getUser);
    },
};