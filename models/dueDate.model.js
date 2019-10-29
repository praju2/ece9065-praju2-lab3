const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dueDateSchema = new Schema({
    Book  : {type: Number, required: true, max: 99},
    CD  :   {type: Number, required: true, max: 99}    
},{collection : 'dueDate'});


// Export the model
module.exports = mongoose.model('DueDate', dueDateSchema);