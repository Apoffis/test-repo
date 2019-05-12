const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const DB = require('../config/db');
const app = express.Router();

const User = require('../model/user');

let token = '';

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    res.send('good job');
    req.userId = payload.subject
    next()
  }

app.get('/', (req, res) => {
    res.send('From API route');
});

app.get('/get-us', (req, res) => {
    User.find().then(usr => {
        res.status(200).json(usr);
    }).catch(err => {
        res.status(400).json(err);
    });
});

app.post('/registr', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    user.save((err, regUser) => {
        if (err) { console.log(err); }
        else {
            let payload = { subject:user._id };
            token = jwt.sign(payload, DB.secret, {expiresIn : '1h'});
            res.status(200).send({token});
        }
    });
});

app.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({ username: userData.username }, (err, reqUser) => {
        if (err) {
            throw err;
        } else {
            if (!reqUser) {
                res.status(401).send('Invalid username');
            } else {
                if (reqUser.password !== req.body.password) {
                    res.status(401).send('Wrong password');
                } else {
                    let payload = { subject:userData._id };
                    token = jwt.sign(payload, DB.secret, {expiresIn : '1h'});
                    res.status(200).send({token});
                }
            }
        }
    });
});

app.get('/username', (req, res, next) => {

});

app.post('/change-pass/:username', (req, res) => {
   
    User.findOne({ username: req.params.username }, (err, usr) => {
        if (err) res.status(500).json(err);
        else {
            usr.username = req.body.username ? req.body.username : usr.username;
            usr.password = req.body.password ? req.body.password : usr.password;
            usr.save().then(changeed => {
                res.status(200).json(changeed);
            }).catch(err => {
                res.status(400).json(err);
            });
        }
    });
});

module.exports = app;