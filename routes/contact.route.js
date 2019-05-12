var express = require('express');
var contactRouter = express.Router();

var Contact = require('../model/contact.model');

contactRouter.get('/', (req, res) => {
    Contact.find().then(videos => {
        res.status(200).json(videos);
    }).catch(err => {
        res.status(400).json(err);
    });
});

contactRouter.get('/contact/:id', (req,res) => {
    Contact.findOne({ _id: req.params.id }).then(contact => {
        res.status(200).json(contact);
    }).catch(err => {
        res.status(400).json(err);
    });
});

contactRouter.get('/video/:id', (req, res) => {
    Contact.findOne({ _id: req.params.id }).then(video => {
        res.status(200).json(video);
    }).catch(err => {
        res.status(400).json(err);
    });
});

contactRouter.post('/add', (req, res) => {
    var video = new Contact ({
        fullName: req.body.fullName ? req.body.fullName : '',
        phone: req.body.phone ? req.body.phone : '',
        addres: req.body.addres ? req.body.addres : '',
        email: req.body.email ? req.body.email : ''
    });
    video.save().then(video => {
        res.status(200).json(video);
    }).catch(err => {
        res.status(400).json(err);
    });
});

contactRouter.put('/edite/:id', (req, res) => {
    Contact.findOne({ _id: req.params.id }, (err, contact) => {
        if (err) {
            res.status(500).json(err);
        } else {
            contact.fullName = req.body.fullName ? req.body.fullName : contact.fullName;
            contact.phone = req.body.phone ? req.body.phone : contact.phone;
            contact.addres = req.body.addres ? req.body.addres : contact.addres;
            contact.email = req.body.email ? req.body.email : contact.email;
            contact.save().then(vid => {
                res.status(200).json(vid);
            }).catch(err => {
                res.status(400).json(err);
            });
        }
    });
});

contactRouter.get('/delete/:id', (req, res) => {
    Contact.findByIdAndDelete({ _id: req.params.id }, (err, vid) => {
        if (err) {
            res.json(err);
        } else {
            res.json(vid);
        }
    });
});

module.exports = contactRouter;