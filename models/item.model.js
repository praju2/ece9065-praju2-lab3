const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let itemSchema = new Schema({
    type  : {type: String, required: true, max: 20},
    name  : {type: String, required: true, max: 200},
    publisher : {type: String, max: 100},
    author : {type: String, max: 200},
    edition : {type: String, max: 20},
    copies : {type: Number, required: true},
    image : {type: String, required: true, max: 400},
    active : {type: Boolean, required: true},
    name_lang_2 : {type: String, required: true, max: 200},
},{collection : 'items'});


// Export the model
module.exports = mongoose.model('Item', itemSchema);