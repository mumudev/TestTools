var mongoose = require('./db');

var rightSchema = mongoose.Schema({

});

var wxSchema = mongoose.Schema({ //微信wiki：https://mp.weixin.qq.com/wiki
    subscribe: Number, //是否关注
    nickname: String, //用户昵称
    password: String, //用户密码
    sex: Number, //性别
    language: String, //语言
    city: String, //市
    province: String, //省
    country: String, //国家
    headimgurl: String, //头像URL
    subscribe_time: Number, //上次关注时间
    unionid: String, //用户unionid
    remark: String, //公众号对用户备注
    groupid: Number //用户分组
});

var schema = mongoose.Schema({
    openid: String, //用户openid
    username: { type: String, unique: true },
    api_key: { type: String, unique: true },
    right: rightSchema,
    wx_info: wxSchema,
    password: String,
    balance: Number
});

schema.methods.verify = function(msg, api_key) {

};
schema.methods.recharge = function(balance) {

};

module.exports = mongoose.model('user', schema);