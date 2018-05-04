var passport = require('passport');

const getRegister = function(req, res) {
    res.render('register');
};

const login = passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] });

const redirect = (passport.authenticate('google'),
  function(req, res) {
    res.redirect('/');
  });

module.exports = {
   login, redirect
};
