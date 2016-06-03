var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recite');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Mongo Connect Success');
});