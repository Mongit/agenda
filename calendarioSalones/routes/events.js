var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var eventos = require('./../schemas/evento');


router.get('/gettingEvents', function(req, res, next) {
    var Evento = mongoose.model('Evento');
    
    Evento.find(function(err, eventos) {
        if(err) return next(err);
        res.json(eventos);
    });
});


router.post('/', function(req, res, next) {
    var NuevoEvento = mongoose.model('Evento');
    
    if(req.body.repetir === 1) 
        var repetir = true;
    
    NuevoEvento.create({
        titulo: req.body.title,
        start: req.body.start,
        end: req.body.end,
        repetir: repetir,
    }, function(err, evento) {
        if (err) return console.log("UPS! " +  err);
        
        console.log("Evento guardado exitosamente: " + evento);
        
        evento.usuario.push({
            nombre: req.body.nombre,
            numControl: req.body.numControl
        });
        
        evento.salon.push({
            edificio: req.body.edificio,
            numSalon: req.body.numSalon
        });
        
        //Si repetir es true, guardar las fechas en que se repetira
        if(evento.repetir === true ) {
            evento.repetirFrec.push({
                timeStart: req.body.timeStart, 
                timeEnd: req.body.timeEnd,
                weekday: repetirFrec.weekday.push(req.body.weekday),
                dateStart: req.body.dateStart,
                dateEnd: req.body.dateEnd
            });
        }
                
        
        evento.save(function(err, project) {
            if(err) return console.log("Oh you poor thing " +  err);
            
            console.log("Subdocuments saved! " + evento);
        });
    
    });
    
});


/*
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
  ********************************\  
});


router.delete('/:id', function(req, res, next) {
    var Reservacion = mongoose.model('Reservacion');
    
    Reservacion.findByIdAndRemove(req.params.id, function(err, reservacion) {
        if(err) return next(err);
        res.json(reservacion);
    });
});
*/
module.exports = router;
