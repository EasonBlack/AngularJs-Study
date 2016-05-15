var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry:  "./client.js",
    output: {
        path: "./build",
        filename: "bundle.js",
        publicPath: '/'
    },
    devtool: 'source-map',
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
                test: /\.js$/, exclude: /node_modules/, loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}