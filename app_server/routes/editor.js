var express = require('express');
var router = express.Router();

const ctrlEditor = require('../controllers/editor');
/* GET home page. */
router.get('/', ctrlEditor.edicion);
module.exports = router;
