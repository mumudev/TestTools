var mongoose = require('./db');
var schema = new mongoose.Schema({
    access_token: String,
    expires_in: Number,
    refresh_token: String,
    openid: String,
    scope: String,
    create_at: String
});
schema.statics.getToken = function(openid, cb) {
    this.findOne({ openid: openid }, function(err, result) {
        if (err) throw err;
        return cb(null, result);
    });
};
schema.statics.setToken = function(openid, token, cb) {
    // 有则更新，无则添加
    var query = { openid: openid };
    var options = { upsert: true };
    this.update(query, token, options, function(err, result) {
        if (err) throw err;
        return cb(null);
    });
};

mongoose.model('token', schema);