var appCtrl = require('../controller/server.ctrl');

module.exports = function(app){
    app.get('/', appCtrl.getHtml );
}

