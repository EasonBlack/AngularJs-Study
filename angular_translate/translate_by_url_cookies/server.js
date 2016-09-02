var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    fs = require('fs'),
    app = express(),
    server = app.listen(4000, function () {
        console.log('connect 4000 successful');
    })

app.use(express.static(path.join(__dirname, '../../vendor')));
app.use(express.static(path.join(__dirname, '../../node_modules')));
app.use('/view', express.static(__dirname + '/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/api/lang', function (req, res) {
    // Check endpoint called with appropriate param.:
    if (!req.query.lang) {
        res.status(500).send();
        return;
    }

    try {
        var lang = require('./i18n/' + req.query.lang);
        console.log(lang);
        res.send(lang);
    } catch (err) {
        res.status(404).send();
    }
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'demo.html'));
})

