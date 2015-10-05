var express = require('express');
var router = express.Router();

var reservacionFactory = require('./../schemas/reservacion');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});


router.post('/nuevo', function(req, res, next) {
    
    var reservacion = new  reservacionFactory;
    
        reservacion.titulo = 'ISC 5B';
        reservacion.usuario = [{
            nombre: 'Juan',
            numControl: 13040234
        }];
        reservacion.salon = [{
            edificio: 'A',
            numSalon: 2
        }];
        reservacion.horario = [{
            hrEmpieza: '12:30:00',
            hrTermina: '16:30:00'
        }];
        reservacion.repetir.push(['2015-10-09', '2015-10-19']);
    
    
    reservacion.save(callback);
    
});


router.get('/getAll', function(req, res, next) {
        var Reservacion = mongoose.model('Reservacion');
    
    Reservacion.find(function(err, reservaciones) {
        if(err) return console.log("Oh oh, " + err);
        console.log("Your Reservations are: "+ reservaciones);
    });

});

module.exports = router;
