var express = require('express');
var multer = require('multer');
var fs = require('fs');

var aboutRouter = express.Router();
var About = require('../model/about.model');

var PATH = 'uploads/about';

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, PATH);
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    }
});

var fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    } else {
        cb(null, false);
    }
};

var upload = multer({
    storage: storage,
    fileFilter: fileFilter
}).single('photo');

aboutRouter.get('/', (req, res) => {
    About.find().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(400).json(err);
    });
});

aboutRouter.get('/data/:id', (req, res) => {
    About.findOne({ _id: req.params.id }).then(img => {
        res.status(200).json(img);
    }).catch(err => {
        res.status(400).json(err);
    });
});

aboutRouter.post('/add', upload, (req, res) => {
    if (req.file) {
        var img = new About({
            title: req.body.title,
            description: req.body.description,
            uri: req.file.path
        });

        img.save().then(image => {
            if (!image) {
                return res.json('Select Image');
            } else {
                return res.json('File sended successfully');
            }
        }).catch(err => {
            return res.json("It is big error!  " + err);
        });
    }
});

aboutRouter.put('/edite/:id', upload, (req, res) => {
    About.findOne({ _id: req.params.id }, (err, image) => {
        if (err) {
            res.status(500).send();
        } else {
            if (req.body.title) {
                image.title = req.body.title;
            }
            if (req.body.description) {
                image.description = req.body.description;
            }
            if (req.file) {
                fs.unlink(image.uri, (err) => {
                    if (err) {
                        res.json(err);
                    }
                });
                image.uri = req.file.path;
            }
            image.save().then(update => {
                res.send(update);
            }).catch(err => {
                res.status(500).send();
            });
        }
    });
});

aboutRouter.get('/delete/:id', (req, res) => {
    About.findByIdAndDelete({ _id: req.params.id }, (err, img) => {
        if (err) {
            res.json(err);
        } else {
            if (img.uri) {
                fs.unlink(img.uri, (err) => {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json('File deleted successfully');
                    }
                });
            } else {
                res.json('File with this name is not exists!');
            }
        }
    });
});

module.exports = aboutRouter;