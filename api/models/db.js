/*jshint esversion: 6 */
var mongoose = require('mongoose');
var dbConf = require("../../conf").mongodb;
if (dbConf.auth) {
    var connectStr = `mongodb://${dbConf.username}:${dbConf.password}@${dbConf.host}:${dbConf.port}\\${dbConf.database}`;
} else {
    var connectStr = `mongodb://${dbConf.host}:${dbConf.port}\\${dbConf.database}`;
}

mongoose.connect(connectStr);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
    console.log("Connected the mongodb!");
});

module.exports = mongoose;