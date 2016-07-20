

var path = require("path");

module.exports = {
    entry: {
        app: [
            "./app/app.module.js",
        ]
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader?presets[]=es2015']
        },{
            test: /\.html$/,
            loaders: ['html-loader']
        }]
    }
};

