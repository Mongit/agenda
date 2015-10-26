var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuariooSchema = require('./usuario');
var salonSchema = require('./salon');
var repetirFrec = require('./repetirFrec');

var eventoSchema = Schema({
    titulo: {type: String, required: true},
    usuario: [usuariooSchema],
    salon: [salonSchema],
    start: {type: Date, required: true},
    end: {type: Date, required: true},
    repetir: {type: Boolean, default: false},
    repetirFrec: [repetirFrec]
});

var Evento = mongoose.model("Evento", eventoSchema);

module.exports = function(config) {
    return new Evento(config);
};
