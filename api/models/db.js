/*jshint esversion: 6 */
var mongoose = require('mongoose');
var dbConf = require("../../conf").mongodb;
var connectStr;
if (dbConf.auth) {
    connectStr = `mongodb://${dbConf.username}:${dbConf.password}@${dbConf.host}:${dbConf.port}/${dbConf.database}`;
} else {

}
connectStr = `mongodb://${dbConf.host}:${dbConf.port}/${dbConf.database}`;
var options = {
    db: { native_parser: true },
    server: { poolSize: 5 },
    user: dbConf.username,
    pass: dbConf.password
}
mongoose.connect(connectStr, options)
var db = mongoose.connection;//获取Connection 连接对象
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("Connected the mongodb!");
});

module.exports = mongoose;