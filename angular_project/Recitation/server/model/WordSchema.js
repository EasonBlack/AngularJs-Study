var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WordSchema = new Schema({
    text: String,
    name: String,
    mean: String,
    star: String,
    image: String
});

var Word = mongoose.model('Word', WordSchema);

module.exports = Word;