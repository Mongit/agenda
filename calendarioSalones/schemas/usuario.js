var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuariooSchema = Schema({
    nombre: {type: String, required: true},
    numControl: {type: Number, required: true}
});

var Usuarioo = mongoose.model("Usuarioo", usuariooSchema);

module.exports = function(config) {
    return new Usuarioo(config);
};