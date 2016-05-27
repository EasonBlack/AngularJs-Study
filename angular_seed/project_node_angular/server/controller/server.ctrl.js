var path = require('path');
var fs = require('fs');


exports.getHtml = function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
}


