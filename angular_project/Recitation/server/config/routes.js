var appCtrl = require('../controller/server.ctrl');
var multer  = require('multer');


module.exports = function(app){
    app.get('/', appCtrl.getHtml );

    app.post('/api/word', appCtrl.WordAdd );
}

