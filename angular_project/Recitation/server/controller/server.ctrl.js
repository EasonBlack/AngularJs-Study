var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');
var Word = require('../model/WordSchema');

exports.getHtml = function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
}

exports.WordAll = function (req, res) {
    Word.find({},function(err, words){
        res.send(words);
    })
}

exports.WordList = function (req, res) {
    var page = req.param('page');
    console.log(page);
    page ? page=parseInt(page): 1;
    Word.count(function(err, count){
        Word.find({}).skip((page-1)*10).limit(10)
            .exec(function(err, docs) {
                res.send({
                    count:count,
                    data: docs
                });
            });
    })

}

exports.WordAdd = function (req, res) {
    var newWork = new Word(req.body);
    newWork.save(function (err) {
        if (err) throw err;
        res.send(newWork);
    });
}



