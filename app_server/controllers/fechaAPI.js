const mongoose = require('mongoose');
const Fecha = mongoose.model('Fecha');
const Partido = mongoose.model('Partido');

const getFecha = function (req, res) {
  console.log(req.query.id);
  Fecha.
  findOne({numero:req.query.id}).
  populate({ path: 'partidos',
             populate:[{ path: 'local'},{ path: 'visitante'}]
           }).
  exec(function (err, resultado) {
    if (err) {
				res
					.status(404)
					.json(err);
    } else {
				res
					.status(200)
					.json(resultado);
			}
		})
};

module.exports = {
	getFecha
};
