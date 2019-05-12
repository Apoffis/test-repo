const mongoose = require('mongoose');

const Soc = new mongoose.Schema({
    urlF: { type: String },
    urlI: { type: String },
    urlB: { type: String },
    urlA: { type: String }
}, { collection: 'soc' });

module.exports = mongoose.model('Soc', Soc);