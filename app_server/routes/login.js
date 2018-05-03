var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/login');
/* GET home page. */
router.get('/', ctrlMain.login);
module.exports = router;
