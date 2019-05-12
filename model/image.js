var mongoose = require('mongoose');

const Image = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    uri: { type: String },
    isSlider: { type: Boolean }
}, { collation: 'images' });

module.exports = mongoose.model('Image', Image);