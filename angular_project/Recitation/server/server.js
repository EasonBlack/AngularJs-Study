var express = require('express');

var app = express();

app.listen(2006, function () {
    console.log('connect success!');
});

require('./config/express')(app,express);
require('./config/routes')(app);
require('./config/webpack')(app);
require('./config/mongo');