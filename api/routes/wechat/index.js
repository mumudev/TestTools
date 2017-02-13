var express = require('express');
var app = express();

app.use('/msg', require('./msg'));
app.use('/pay', require('./pay'));
module.exports = app;