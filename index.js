var ejs = require('ejs');
var path = require('path');
var conf = require('./conf');
var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var session = require('express-session');

publicPath = path.join(__dirname, 'pub');
viewsPath = path.join(__dirname, 'views');
faviconPath = path.join(__dirname, '/pub/favicon.ico');

var app = express();
app.use(bodyParser.json());
app.set('views', viewsPath);
app.use(favicon(faviconPath));
app.use(session(conf.session));
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.get('/login', function (req, res) {
    res.render('login');
});
app.use('/' + conf.version + '/api', require('./api'));
app.get('/', function (req, res) {
    res.render('index');
});

// production error handler
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).render('error');
});

app.listen(conf.port, function (err) {
    if (err) {
        console.log('Create server fail!');
    } else {
        console.log('%s listening at %s', conf.path, conf.port);
    }
});