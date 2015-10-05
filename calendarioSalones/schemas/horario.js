var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var horarioSchema = Schema({
    todoElDia: {type: Boolean, default: false},
    hrEmpieza: {type: String, required: true},
    hrTermina: {type: String, required: true}
});

var Horario = mongoose.model("Horario", horarioSchema);

module.exports = function(config) {
    return new Horario(config);
};