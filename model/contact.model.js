var mongoose = require('mongoose');

var Contact = new mongoose.Schema({
    fullName: { type: String },
    phone: { type: String },
    addres: { type: String },
    email: { type: String }, 
}, { collation: 'contacts' });

module.exports = mongoose.model('Contact', Contact);