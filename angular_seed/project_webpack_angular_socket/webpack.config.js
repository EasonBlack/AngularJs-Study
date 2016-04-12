var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        manager: "./client/manager.js",
        customer: "./client/customer.js"
    },
    output: {
        path: require("path").resolve("./client/build"),
        filename: "[name].bundle.js",
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}