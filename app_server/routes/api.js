var express = require('express');
var router = express.Router();

const fechaAPI = require('../controllers/fechaAPI');
const middleware =  require('../auth/middleware');

/* GET home page. */
router.get('/fecha', fechaAPI.getFecha);

router.post('/partidoNuevo', middleware, fechaAPI.savePartido);

module.exports = router;
