var webpackConfig = require('./webpack.config.js');
var gulp = require('gulp');
var webpack = require("webpack");
var express = require('gulp-express');

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

gulp.task('server', ['webpack'], function() {
    express.run(['index']); //Start server
    gulp.watch(['./app/**/*.vue', './app/**/*.js', './app/**/*.jsx', './app/**/*.html'], ['webpack']); //Webpack 
    gulp.watch(['./app/**/*.vue', './app/**/*.js', './app/**/*.jsx', './app/**/*.html', 'views/**/*.jade'], express.notify); //Watch views and app sources file.
    gulp.watch(['index.js', 'api/**/*.js'], express.run); //Rstart server
});

gulp.task('default', ['server']);

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