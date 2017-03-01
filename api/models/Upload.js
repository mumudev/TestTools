var mongoose = require('./db');
var schema = mongoose.Schema({
    filename: String,
    username: String,
    datetime: String
});

module.exports = mongoose.model('upload', schema);