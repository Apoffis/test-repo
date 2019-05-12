var express = require('express');
var videoRouter = express.Router();

var Videos = require('../model/video.model');

videoRouter.get('/', (req, res) => {
    Videos.find().then(videos => {
        res.status(200).json(videos);
    }).catch(err => {
        res.status(400).json(err);
    });
});

videoRouter.get('/video/:id', (req, res) => {
    Videos.findOne({ _id: req.params.id }).then(video => {
        res.status(200).json(video);
    }).catch(err => {
        res.status(400).json(err);
    });
});

videoRouter.post('/add', (req, res) => {
    var video = new Videos ({
        video_name: req.body.video_name,
        video_desc: req.body.video_desc,
        video_url: req.body.video_url
    });
    video.save().then(video => {
        res.status(200).json(video);
    }).catch(err => {
        res.status(400).json(err);
    });
});

videoRouter.put('/edite/:id', (req, res) => {
    Videos.findOne({ _id: req.params.id }, (err, video) => {
        if (err) {
            res.status(500).json(err);
        } else {
            if (req.body.video_name) {
                video.video_name = req.body.video_name;
            }
            if (req.body.video_desc) {
                video.video_desc = req.body.video_desc;
            }
            if (req.body.video_url) {
                video.video_url = req.body.video_url;
            }
            video.save().then(vid => {
                res.status(200).json(vid);
            }).catch(err => {
                res.status(400).json(err);
            });
        }
    });
});

videoRouter.get('/delete/:id', (req, res) => {
    Videos.findByIdAndDelete({ _id: req.params.id }, (err, vid) => {
        if (err) {
            res.json(err);
        } else {
            res.json(vid);
        }
    });
});

module.exports = videoRouter;