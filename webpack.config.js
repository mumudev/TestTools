var webpack = require('webpack');
var path = require('path');
// Webpack configuration
module.exports = {
    // Entry Files
    entry: {
        app: './app/app.jsx',
        login: './app/login.jsx',
        vendor: ['vue', 'lodash', 'vuex', 'vue-router', 'vue-resource', 'director', 'whatwg-fetch']
    },
    // Output Files
    output: {
        path: 'pub/dist',
        filename: '[name].js'
    },
    // Loaders
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.jsx$/,
            loader: 'babel'
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=50000&name=[path][name].[ext]'
        }]
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.js'
        },
    },
    // Plugins
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            Vue: 'vue'
        })
    ]
};