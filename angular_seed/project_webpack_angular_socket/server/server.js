var express = require('express');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(3000, function(){
    console.log('listening on *:3000');
});

require('./config/express')(app,express);
require('./config/routes')(app);
require('./config/webpack')(app);
require('./config/socket')(io);