var express = require('express'),
    _ = require('lodash'),
    config = require('./config'),
    http = require('http'),
    jwt = require('jsonwebtoken'),
    bodyParser = require('body-parser'),
    cors = require('cors');

var users = [{
    username: 'eason',
    password: 'admin'
}];


var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


http.createServer(app).listen(3000, function (err) {
    console.log('listening in http://localhost:' + 3000);
});


function createToken(user) {
    return jwt.sign(_.omit(user, 'password'), config.secret, {expiresIn: 60 * 5});
}

app.get('/list', function (req, res) {
    var token = req.headers['authorization'];
    if (token) {
        jwt.verify(token,  config.secret, function(err, decoded) {
            if (err) {
                res.send({ msg: 'Failed to authenticate token.' });
            } else {
                console.log(decoded);
                var user = _.find(users, {username: decoded.username});
                res.send({
                    msg: 'Hello World'
                });
            }
        });
    } else {
        res.send({ msg: 'Failed to authenticate token.' });
    }
})

app.post('/login', function (req, res) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).send("You must send the username and the password");
    }
    console.log(req.body.username, req.body.password);
    var user = _.find(users, {username: req.body.username});
    if (!user) {
        return res.status(401).send("The username or password don't match");
    }

    if (!user.password === req.body.password) {
        return res.status(401).send("The username or password don't match");
    }

    res.status(201).send({
        id_token: createToken(user)
    });
});