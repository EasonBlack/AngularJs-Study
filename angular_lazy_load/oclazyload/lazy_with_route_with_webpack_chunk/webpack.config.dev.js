var path = require("path");

module.exports = {
    entry: {
        vendor: "./client",
        app: "./app/app.module.js",
        view1: "./view1/view1.module.js"
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
        publicPath: '/build/'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader?presets[]=es2015']
        }, {
            test: /\.html$/,
            loaders: ['html-loader']
        }]
    }
};

