var appCtrl = require('../controller/server.ctrl');

var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'e:\\ImageServer')
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, file.fieldname + '-' + Date.now()+'.png')
    }
})
var upload = multer({ storage: storage });


module.exports = function(app){
    app.get('/', appCtrl.getHtml );

    app.get('/api/word', appCtrl.WordList );
    app.get('/api/allword', appCtrl.WordAll );
    app.post('/api/word', upload.single('image'), appCtrl.WordAdd );
}

