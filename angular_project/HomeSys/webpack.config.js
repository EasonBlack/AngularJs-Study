var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry:  "./client.js",
    output: {
        path: "./build",
        filename: "bundle.js",
        publicPath: '/'
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
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    compact : true
                }
            }
        ]
    }
}