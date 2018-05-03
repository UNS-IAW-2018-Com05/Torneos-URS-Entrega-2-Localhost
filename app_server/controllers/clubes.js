const mongoose = require('mongoose');
const Club = mongoose.model('Club');

/* GET home page. */
const clubes = function (req, res) {
  var query = Club.find({});
  query.exec(function(err,clubes){
    if(err)
       return console.log(err);
    res.render('clubes', { title: 'Torneos URS',
                           clubes: clubes
                          });
  });
};

module.exports = {
  clubes
}
