(function () {
    var app = angular.module('app');
        

    app.controller('IndexController', ['$http', '$location', 'eventosApi', function($http, $location, eventosApi){
        var ctrl = this;
        ctrl.eventos = [];
        
        eventosApi.getAll(function(eventos) {
            ctrl.eventos = eventos;
        });
        
        ctrl.delete = function(id) {
            eventosApi.delete(id, function() {
                $location.path('/');
            });
        };
        
        }]);
})();