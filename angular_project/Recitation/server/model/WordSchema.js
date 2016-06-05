var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WordSchema = new Schema({
    name: String,
    mean: String,
    star: String,
    image: String
});

var Word = mongoose.model('Word', WordSchema);

module.exports = Word;