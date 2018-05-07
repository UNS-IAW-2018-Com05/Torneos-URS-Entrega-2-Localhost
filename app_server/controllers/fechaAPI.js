const mongoose = require('mongoose');
const Fecha = mongoose.model('Fecha');
const Partido = mongoose.model('Partido');

const getFecha = function (req, res) {
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

const savePartido = function(req,res) {
  Partido.findByIdAndUpdate(
    // the id of the item to find
    req.body.id,

    // the change to be made. Mongoose will smartly combine your existing
    // document with this change, which allows for partial updates too
    req.body,

    // an option that asks mongoose to return the updated version
    // of the document instead of the pre-updated one.

    // the callback function
    (err, partido) => {
    // Handle any possible database errors
        if (err) return res.status(500).send(err);
        return res.send(partido._id);
    }
)
}

module.exports = {
	getFecha,savePartido
};
