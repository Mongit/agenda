var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var repetirFrec = Schema({
    timeStart: {type: Date, required: true}, 
    timeEnd: {type: Date, required: true},
    weekday: [Number],
    dateStart: Date,
    dateEnd: Date
});

var RepetirFrec = mongoose.model("Horario", repetirFrec);

module.exports = function(config) {
    return new RepetirFrec(config);
};