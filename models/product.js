const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    imagePath: {type: String},
    title: {type: String},
    description: {type: String},
    price: {type: Number},
});

module.exports = mongoose.model('Product', schema);
