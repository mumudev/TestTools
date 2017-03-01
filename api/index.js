var msgMw = require('./middleware/msg');
var express = require('express');
var app = express();

app.use('/', msgMw);
app.use('/order', require('./validates/order'));
app.use('/payment', require('./validates/payment'));
app.use('/product', require('./validates/product'));
app.use('/session', require('./validates/session'));
app.use('/user', require('./validates/user'));
app.use('/wechat', require('./validates/wechat'));
app.use('/upload', require('./validates/upload'));

app.use('/order', require('./routes/order'));
app.use('/payment', require('./routes/payment'));
app.use('/product', require('./routes/product'));
app.use('/session', require('./routes/session'));
app.use('/user', require('./routes/user'));
app.use('/wechat', require('./routes/wechat'));
app.use('/task', require('./routes/task'));
app.use('/upload', require('./routes/upload'));
module.exports = app;