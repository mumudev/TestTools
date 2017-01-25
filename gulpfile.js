var webpackConfig = require('./webpack.config.js');
var gulp = require('gulp');
var webpack = require("webpack");

gulp.task("webpack", function(callback) {
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = 'source-map';
    webpack(myConfig, function(err, stats) {
        if (err) {
            console.error(err);
        }
        callback();
    });
});

gulp.task('watchVue', function() {
    gulp.watch(['./app/**/*.vue', './app/**/*.js', './app/**/*.jsx', './app/**/*.html'], ['webpack']);
});

gulp.task('build', function() {
    var myConfig = Object.create(webpackConfig);
    myConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }));
    myConfig.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'production'
            }
        }));
    webpack(myConfig, function(err, stats) {
        if (err) {
            console.error(err);
        }
        callback();
    });
});