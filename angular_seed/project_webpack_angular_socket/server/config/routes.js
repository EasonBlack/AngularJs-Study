var appCtrl = require('../controller/server.ctrl');
var multer  = require('multer');


module.exports = function(app){
    app.get('/manager', appCtrl.getManagerHtml );
    app.get('/customer', appCtrl.getCustomerHtml );
}

