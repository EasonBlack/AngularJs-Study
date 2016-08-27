var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        './app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader?presets[]=es2015']
        }, {
            test: /\.html$/,
            loaders: ['html-loader']
        }
        ]
    }
};