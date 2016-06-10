var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');
var Word = require('../model/WordSchema');
var moment = require('moment');

exports.getHtml = function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
}

exports.WordAll = function (req, res) {
    Word.find({}, function (err, words) {
        res.send(words);
    })
}

exports.WordList = function (req, res) {
    var page = req.param('page');
    page ? page = parseInt(page) : 1;
    Word.count(function (err, count) {
        Word.find({}).skip((page - 1) * 10).limit(10).sort({_id: -1})
            .exec(function (err, docs) {
                res.send({
                    count: count,
                    data: docs
                });
            });
    })

}

exports.WordAdd = function (req, res) {
    console.log(req.file);
    var newWork = new Word(req.body);
    if (req.file) {
        newWork.image = req.file.filename;
    }
    newWork.date = moment().format('YYYY-MM-DD');
    newWork.isShow = true;
    newWork.save(function (err) {
        if (err) throw err;
        res.send(newWork);
    });
}

exports.WordDelete = function (req, res) {
    var _id = req.param('id');

    Word.findById(_id, function (err, word) {
        var url = word.image;
        if(url) {
            url = 'e:\\ImageServer\\' + url;
            fs.accessSync(url, fs.F_OK);
            fs.unlinkSync(url);
        }
        word.remove(function(){
            res.send('success');
        });

    });
    //Word.remove({ _id: _id }, function (err) {
    //    if (err) throw err;
    //    res.send('success');
    //});
}


exports.WordUpdate = function (req, res) {
    var _id = req.param('id');
    Word.findOne({_id: _id}, function (err, word) {
        word.isShow = req.body.isShow;
        word.save(function (err) {
            if (err) throw err;
            res.send(word);
        });
    });
}




