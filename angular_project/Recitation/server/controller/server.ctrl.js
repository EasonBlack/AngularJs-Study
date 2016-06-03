var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');
var Word = require('../model/WordSchema');

exports.getHtml = function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
}

exports.WordAdd = function (req, res) {
    var newWork = new Word(req.body);
    newWork.save(function (err) {
        if (err) throw err;
        res.send(newWork);
    });
}



