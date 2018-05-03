const mongoose = require('mongoose');
const Fecha = mongoose.model('Fecha');
const Partido = mongoose.model('Partido');

var fechaReciente;

var ress;

/* GET home page. */
const index = function (req, res) {
  ress = res;
  obtenerFechas();
};

function obtenerFechas(){
   var query = Fecha.find({});
   query.exec(function(err,fechas){
     if(err)
        return console.log(err);
      obtenerFechaMasReciente(fechas);
  });
}

function obtenerFechaMasReciente(fechas) {
    var index;
    var termine=false;
    var masReciente=99999999999;
    for(index=0;index<fechas.length && !termine;++index){
        var dia = fechas[index].diasDeJuego[1];
        var distancia = new Date()-dia;
        if(distancia<0)
            termine=true;
        else{
            if(distancia<masReciente) {
                masReciente = new Date() - dia;
                fechaReciente = index;
            }
        }
    }
    fechaReciente = fechaReciente+1;
    obtenerPartidos(fechaReciente);
}

function obtenerPartidos(fechaMasReciente){
  Fecha.
  findOne({numero:fechaMasReciente}).
  populate({ path: 'partidos',
             populate:[{ path: 'local'},{ path: 'visitante'}]
           }).
  exec(function (err, resultado) {
    console.log(resultado);
    ress.render('index', {
      title: 'Torneos URS',
      fecha: fechaReciente,
      partidos: resultado.partidos
    })
  });
}

module.exports = {
  index
}