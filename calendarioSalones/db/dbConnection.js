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

/*var DbConnection = function(mongoose) {
    this.mongoose = mongoose.module;
};

DbConnection.prototype.connect = function(connectionString) {
    this.mongoose.connect(connectionString);
    var db = this.mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error: '));
    db.once('open', function(callback) {
        console.log('Conectado a CalendarioDeSalones db');
    });
    process.on('SIGINT', function() {
        db.close(function() {
            console.log("Desconectando de la base de datos");
            process.exit(0);
        });
    });
};

module.exports = function(mongoose) {
    return new DbConnection(mongoose);
};

======================================var mongoose = require('mongoose');
var DbConnection = require('./db/dbConnection');
var db = DbConnection(mongoose);
db.connect('mongodb://localhost/calendarioDeSalones');

*/