const mongoose = require('mongoose');

const Video = new mongoose.Schema({
    video_name: { type: String },
    video_desc: { type: String },
    video_url: { type: String }
}, { collation: 'videos'});

module.exports = mongoose.model('Videos', Video);