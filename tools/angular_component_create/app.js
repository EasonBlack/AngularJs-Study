var fs = require('fs');
var path = require('path');
var prompt = require('prompt');
var create = require('./create');

prompt.start();
prompt.get(['name'], function (err, result) {
   var _dir = path.join(__dirname, result.name);
    console.log(_dir);
    if (!fs.existsSync(_dir)) {
        fs.mkdirSync(_dir);
        create.createTemplate(_dir, result.name);
        create.createController(_dir, result.name);
        create.createComponent(_dir, result.name);
    }
});





// var header = require('./model/header');
// var body = require('./model/body');
//
// var content = "";
// content = header;
// content += body;
//
// var stream = fs.createWriteStream("simple.html");
// stream.once('open', function(fd) {
//     stream.write(content);
//     stream.end();
// });