var appCtrl = require('../controller/server.ctrl');
var multer  = require('multer');


module.exports = function(app){
    app.get('/', appCtrl.getHtml );

    app.get('/api/word', appCtrl.WordList );
    app.post('/api/word', appCtrl.WordAdd );
}

