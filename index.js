var favicon = require('serve-favicon');
var session = require('express-session');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();
var conf = require('./conf');
viewsPath = path.join(__dirname, 'views');
publicPath = path.join(__dirname, 'pub');
faviconPath = path.join(__dirname, '/pub/favicon.ico');

app.set('views', viewsPath);
app.use(favicon(faviconPath));
app.use(express.static(publicPath));
app.use(session(conf.session));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use('/' + conf.version + '/api', require('./api'));

app.get('/login', function(req, res) {
    res.render('login');
});
app.get('/', function(req, res) {
    if (!req.session.user) {
        // return res.redirect('/login');
    }
    res.render('index');
});

// production error handler
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).render('error', setting);
});

app.listen(conf.port, function(err) {
    if (err) {
        console.log('Create server fail!');
    } else {
        console.log('%s listening at %s', conf.path, conf.port);
    }
});