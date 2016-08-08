var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: './vendor.js',
        app: './app/app.js'
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build/',
        filename: '[name].bundle.js',
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader?presets[]=es2015']
        }, {
            test: /\.html$/,
            loaders: ['html-loader']
        }, {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
            loader: 'url-loader?limit=30000&name=/[hash].[ext]'
        }]
    }
};

