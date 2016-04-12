var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');


exports.getManagerHtml = function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/manager.html'));
}

exports.getCustomerHtml = function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/customer.html'));
}


