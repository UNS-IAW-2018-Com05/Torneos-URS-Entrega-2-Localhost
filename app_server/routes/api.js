var express = require('express');
var router = express.Router();

const fechaAPI = require('../controllers/fechaAPI');

/* GET home page. */
router.get('/', fechaAPI.getFecha);

module.exports = router;
