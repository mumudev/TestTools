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
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0']
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
        extensions: ['', '.js', '.jsx', '.vue']
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