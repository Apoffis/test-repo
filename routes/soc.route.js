var express = require('express');
var socRouter = express.Router();
var DB = require('../config/db');

var Soc = require('../model/soc.model');

socRouter.get('/', (req, res) => {
    Soc.find().then(soc => {
        res.status(200).json(soc);
    }).catch(err => {
        res.status(400).json(err);
    });
});

socRouter.get('/soc/:id', (req, res) => {
    Soc.findOne({ _id: req.params.id }).then(soc => {
        res.status(200).json(soc);
    }).catch(err => {
        res.status(400).json(err);
    });
});

socRouter.post('/add', (req, res) => {
    var soc = new Soc ({
        urlF: req.body.urlF ? req.body.urlF : '',
        urlI: req.body.urlI ? req.body.urlI : '',
        urlB: req.body.urlB ? req.body.urlB : '',
        urlA: req.body.urlA ? req.body.urlA : ''
    });
    soc.save().then(soc => {
        res.status(200).json(soc);
    }).catch(err => {
        res.status(400).json(err);
    });
});

socRouter.put('/edite/:id', (req, res) => {
    Soc.findOne({ _id: req.params.id }, (err, soc) => {
        if (err) {
            res.status(500).json(err);
        } else {
            soc.urlF = req.body.urlF ? req.body.urlF : soc.urlF;
            soc.urlI = req.body.urlI ? req.body.urlI : soc.urlI;
            soc.urlB = req.body.urlB ? req.body.urlB : soc.urlB;
            soc.urlA = req.body.urlA ? req.body.urlA : soc.urlA;
            soc.save().then(so => {
                res.status(200).json(so);
            }).catch(err => {
                res.status(400).json(err);
            });
        }
    });
});

socRouter.get('/delete/:id', (req, res) => {
    Soc.findByIdAndDelete({ _id: req.params.id }, (err, vid) => {
        if (err) {
            res.json(err);
        } else {
            res.json(vid);
        }
    });
});

module.exports = socRouter;