var express = require('express');
var app = express();

app.use('/excelCompare', require('./excelCompare'));
module.exports = app;