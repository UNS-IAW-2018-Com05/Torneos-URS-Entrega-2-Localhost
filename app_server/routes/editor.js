var express = require('express');
var router = express.Router();

const ctrlEditor = require('../controllers/editor');
const middleware = require('../auth/middleware');

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

/* GET home page. */
router.get('/',isLoggedIn, ctrlEditor.edicion);
module.exports = router;
