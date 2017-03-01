var gulp = require('gulp');
var git = require('gulp-git');
var webpack = require("webpack");
var express = require('gulp-express');
var webpackConfig = require('./webpack.config.js');
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

gulp.task("notify", function(callback) {
    express.notify({ path: './app/**/*.*' });
    callback();
});

gulp.task("notify-webpack", ['webpack'], function(callback) {
    express.notify({ path: './app/**/*.*' });
    callback();
});

gulp.task('default', ['watch:all'], function(callback) {});

gulp.task('watch:app', ['webpack'], function(callback) {
    gulp.watch(['./app/**/*.*', './views/*.html'], ['webpack']);
});

gulp.task('watch:all', ['webpack'], function(callback) {
    express.run(['index'], {}, 35729);
    gulp.watch(['./app/**/*.*', './views/*.html'], ['notify-webpack']);
    gulp.watch(['./index.js', 'api/**/*.js'], ['notify']);
    gulp.watch(['./index.js', 'api/**/*.js'], express.run);
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

gulp.task('git', ['build'], function() {
    setInterval(function() {
        git.pull('origin', 'master', { args: '--rebase' }, function(err) {
            if (err) console.error(err);
        });
    }, 60000);
    express.run(['index'], {}, 35729);
    gulp.watch(['./app/**/*.vue', './app/**/*.js', './app/**/*.jsx', './app/**/*.html'], ['build']);
    gulp.watch(['./index.js', 'api/**/*.js'], express.run);
});