const mongoose = require('mongoose');
const Partido = mongoose.model('Partido');

/* GET home page. */
const edicion = function (req, res) {
  var query = Partido.find({'estado':'no iniciado'});
  query.exec(function(err,partidos){
    if(err)
       return console.log(err);
    res.render('editor', { title: 'Torneos URS',
                           partidos: partidos
                          });
  });
};

module.exports = {
  edicion
}
