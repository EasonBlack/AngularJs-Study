var appCtrl = require('../controller/server.ctrl');
var multer  = require('multer');


module.exports = function(app){
    app.get('/', appCtrl.getHtml );

    app.get('/api/word', appCtrl.WordList );
    app.get('/api/allword', appCtrl.WordAll );
    app.post('/api/word', appCtrl.WordAdd );
}

