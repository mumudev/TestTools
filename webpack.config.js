var webpack = require('webpack');
var path = require('path');
// Webpack configuration
module.exports = {
    // Entry Files
    entry: {
        main: './app/main.jsx',
        vendor: ['vue', 'lodash', 'director']
    },
    // Output Files
    output: {
        path: 'pub/dist',
        filename: '[name].js'
    },
    // Loaders
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
            loader: 'file-loader',
            query: {
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    // 其他解决方案
    resolve: {
        // require时省略的扩展名，遇到.vue结尾的也要去加载
        extensions: ['', '.js', '.jsx', '.vue'],
        root: '../node_modules',
        alias: {
            'vue': 'vue/dist/vue.js'
        },
    },
    // Plugins
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
        }),
        new webpack.ProvidePlugin({
            Vue: 'vue'
        })
    ]
};