const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var User = mongoose.model('User');

passport.use(
    new localStorage(
        { usernameField: 'username' },
        (username, password, done) => {
            User.findOne({ username: username }, (err, usRec) => {
                if (err) return done(err);
                else if (!usRec) 
                    return done(null, false, { message: 'Username is not registred'});
                else if (!usRec.verifyPassword(password))
                    return done(null, false, { message: 'Wrong password.' });
                else return done(null, usRec);
            });
        }
    )
);