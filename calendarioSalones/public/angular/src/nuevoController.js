(function () {
    var app = angular.module('app');

    app.controller('NuevoController', ['$http', '$location', 'eventosApi', function($http, $location, eventosApi){
        var ctrl = this;
        ctrl.titulo = "";
        ctrl.usuario = {
            nombre: "",
            numControl: undefined
        };
        ctrl.salon = {
            edificio: "",
            numSalon: undefined
        };
        ctrl.horario = {
            todoElDia: undefined,
            hrEmpieza: undefined,
            hrTermina: undefined
        };
        ctrl.repetir = [];
        
        ctrl.save = function() {
            eventosApi.save(ctrl, function(data, status, headers, config) {
                $location.path('/');
            });
        };
        
    }]);
})();