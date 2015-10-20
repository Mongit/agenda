var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var reservaciones = require('./../schemas/reservacion');

router.get('/', function(req, res, next) {
    var Reservacion = mongoose.model('Reservacion');
    
    Reservacion.find(function(err, eventos) {
        if(err) return next(err);
        res.json(eventos);
    });
});

router.post('/', function(req, res, next) {
    
    cosole.log('entro al post');
    console.dir(req);
    cosole.log('entro al post2');
/*    var reservacion = reservaciones({
        titulo: 'ISC 5B',
        usuario: {
            nombre: 'Juan',
            numControl: 13040234
        },
        salon: {
            edificio: 'A',
            numSalon: 2
        },
        horario:{
            hrEmpieza: '12:30:00',
            hrTermina: '16:30:00'
        },
        repetir: reservacion.repetir.push(['2015-10-09', '2015-10-19'])        
    });
    
    reservaciones.save(function(err, data) {
        if(err) return next(err);
        res.json(data);
    });
  */  
});


router.delete('/:id', function(req, res, next) {
    var Reservacion = mongoose.model('Reservacion');
    
    Reservacion.findByIdAndRemove(req.params.id, function(err, reservacion) {
        if(err) return next(err);
        res.json(reservacion);
    });
});

module.exports = router;
