var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/calendarioDeSalones');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
    console.log('DB conectada');
});

process.on('SIGINT', function() {
    db.close(function() {
        console.log("Desconectando de la base de datos");
        process.exit(0);
    });
});
