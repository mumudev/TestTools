var msgMw = require('./middleware/msg');
var express = require('express');
var app = express();

app.use('/', msgMw);
app.use('/order', require('./routes/order'));
app.use('/payment', require('./routes/payment'));
app.use('/product', require('./routes/product'));
app.use('/session', require('./routes/session'));
app.use('/user', require('./routes/user'));
module.exports = app;