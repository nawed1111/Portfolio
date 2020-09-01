const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys');

passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, async (accesToken, refreshToken, profile, done) => {
        console.log(accesToken);
    }
));