var webpack = require('webpack');
var config = require('../../webpack.config.js');
var webpackDevMiddleware = require('webpack-dev-middleware');

module.exports = function(app){
    var compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true
    }));
}


