var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuariooSchema = require('./usuario');
var salonSchema = require('./salon');
var horarioSchema = require('./horario');

var reservacionSchema = Schema({
    titulo: {type: String, required: true},
    usuario: [usuariooSchema],
    salon: [salonSchema],
    horario: [horarioSchema],
    repetir: [Date]
});

var Reservacion = mongoose.model("Reservacion", reservacionSchema);

module.exports = function(config) {
    return new Reservacion(config);
};
