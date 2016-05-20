import moment from 'moment';

angular.module('app')
    .factory('filmService', ['$http', '$rootScope', function ($http, $rootScope) {

        return {
            getItem: function (id) {
                return $http.get('http://localhost:2003/film/' + id)
            },
            addItem: function (obj) {
                return $http.post('http://localhost:2003/film/', obj)
            },
            updateItem: function(id, obj) {
                return $http.put('http://localhost:2003/film/'+ id, obj)
            }
        };
    }])