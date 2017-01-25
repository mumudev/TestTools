var mongoose = require('./db');
var schema = mongoose.Schema({
    username: { type: String, unique: true },
    api_key: { type: String, unique: true },
    password: String,
    balance: Number
});

module.exports = mongoose.model('product', schema);