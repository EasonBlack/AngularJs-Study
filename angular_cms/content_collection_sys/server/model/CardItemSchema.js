var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardItemSchema = new Schema({
    id: Number,
    type: String,
    name: String
});

var CardItem = mongoose.model('CardItem', CardItemSchema);


module.exports = CardItem;