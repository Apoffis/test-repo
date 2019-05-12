const mongoose = require('mongoose');

const About = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    uri: { type: String }
}, { collation: 'about' });

module.exports = mongoose.model('About', About);