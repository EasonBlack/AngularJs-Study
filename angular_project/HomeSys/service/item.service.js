import moment from 'moment';

angular.module('app')
    .factory('itemService', ['$http', '$rootScope', function ($http, $rootScope) {
        var ItemService = function () {
            this.getItem = function (path, id) {
               return  $http.get('http://localhost:2003/'+ path +'/' + id)
            };
        }

        return ItemService;
    }])