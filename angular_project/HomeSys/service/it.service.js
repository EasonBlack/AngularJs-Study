import moment from 'moment';

angular.module('app')
    .factory('itService', ['$http', '$rootScope', function ($http, $rootScope) {
        var IT = function () {
            var self = this;
            this.getItem = function (id) {
               return  $http.get('http://localhost:2003/it/' + id)
            };
        }

        return IT;
    }])