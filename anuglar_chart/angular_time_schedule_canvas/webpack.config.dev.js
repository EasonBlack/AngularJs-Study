var webpack = require('webpack');
var path = require("path");

module.exports = {
    entry: {
        app: [
            "./client.js",
        ]
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
            query: {
                presets: ['es2015'],
                compact: true
            }
        },
            {
                test: /\.html$/,
                loaders: ['html-loader']
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=/[hash].[ext]'
            }
        ]
    }
};



