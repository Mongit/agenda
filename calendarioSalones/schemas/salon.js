var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var salonSchema = Schema({
    edificio: {type: String, required: true},
    numSalon: {type: Number, required: true}
});

var Salon = mongoose.model("Salon", salonSchema);

module.exports = function(config) {
    return new Salon(config);
};