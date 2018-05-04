var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: '718710327542-i1qkj1netsviejoi3j4587qf3btstg69.apps.googleusercontent.com',
    clientSecret: 'ZewuhY_H74MlofFUQW8l5XyM'
  }, (accessToken, refreshToken, profile, done) => {
    Usuario.findOne({googleid: profile.id}).then((currentUser) => {
      if(currentUser){
        return done(null, currentUser);
      }
      else{
          new Usuario({
            username: profile.displayName,
            googleid: profile.id
          }
        ).save().then((newUser) => {
          return done(null, newUser);
        })
      }
    })
  })
);
