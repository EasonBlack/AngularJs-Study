var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');
var Cards = require('../model/CardSchema');
var CardItems = require('../model/CardItemSchema');

exports.getHtml = function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
}

exports.getCardItems = function(req,res) {
    CardItems.find({}, function (err, items) {
        res.send(items);
    });
}


