var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry:  "./client/client.js",
    output: {
        path: require("path").resolve("./client/build"),
        filename: "bundle.js",
        publicPath: '/build'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}