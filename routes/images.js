var express = require('express');
var multer = require('multer');
var fs = require('fs');

var imgRouter = express.Router();
var Image = require('../model/image');

var PATH = 'uploads/illustration';

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, PATH);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}.${file.originalname}`); // ստուգել փոքրատառերով  ${Date.now()}-
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
}).single('proImg');

imgRouter.get('/', (req, res) => {
    Image.find().then(img => {
        res.status(200).json(img);
    }).catch(err => {
        res.status(400).json(err);
    });
});

imgRouter.get('/image/:id', (req, res) => {
    Image.findOne({ _id: req.params.id }).then(img => {
        res.status(200).json(img);
    }).catch(err => {
        res.status(400).json(err);
    });
});

imgRouter.post('/add', upload, (req, res) => {
    console.log("images server");
    iss: Boolean;
    if (req.isSlider === '') {
        iss = false;
    } else if (req.isSlider) {
        iss = true;
    } else {
        iss = false;
    }
    if (req.file) {
        var img = new Image({
            name: req.body.name,
            description: req.body.description,
            uri: req.file.path,
            isSlider: iss
        });
        img.save().then(image => {
            if (!image) {
                return res.json('Select Image');
            } else {
                return res.json('File sended successfully');
            }
        }).catch(err => {
            return res.json(err);
        });
    }
});

imgRouter.put('/edite/:id', upload, (req, res) => {
    Image.findOne({ _id: req.params.id }, (err, image) => {
        if (err) {
            res.status(500).send();
        } else {
            if (req.body.name) {
                image.name = req.body.name;
            }
            if (req.body.description) {
                image.description = req.body.description;
            }
            if (req.body.isSlider != null) {
                image.isSlider = req.body.isSlider;
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

imgRouter.get('/delete/:id', (req, res) => {
    Image.findByIdAndDelete({ _id: req.params.id }, (err, img) => {
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

module.exports = imgRouter;