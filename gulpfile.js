var webpackConfig = require('./webpack.config.js');
var gulp = require('gulp');
var webpack = require("webpack");
var express = require('gulp-express');
var git = require('gulp-git');
var a = false;
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

gulp.task("notify", ['webpack'], function(callback) {
    express.notify({ path: './app/**/*.*' });
    callback();
});

gulp.task('default', ['webpack'], function(callback) {
    a = true;
    express.run(['index'], {}, 35729); //Start server
    gulp.watch(['./app/**/*.*', './index.js', 'api/**/*.js', './views/*.html'], ['notify']); //Webpack 
    gulp.watch(['./index.js', 'api/**/*.js'], express.run); //Restart server
});

gulp.task('git', ['build'], function() {
    setInterval(function() {
        git.pull('origin', 'master', { args: '--rebase' }, function(err) {
            if (err) console.error(err);
        });
    }, 60000);
    express.run(['index']); //Start server
    gulp.watch(['./app/**/*.vue', './app/**/*.js', './app/**/*.jsx', './app/**/*.html'], ['build']); //Webpack 
    gulp.watch(['./index.js', 'api/**/*.js'], express.run); //Rstart server
});

gulp.task('build', function(callback) {
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
                NODE_ENV: '"production"'
            }
        }));
    webpack(myConfig, function(err, stats) {
        if (err) {
            console.error(err);
        }
        callback();
    });
});