import moment from 'moment';

angular.module('app')
    .factory('modelService', ['$http', function ($http) {

        return {
            getList: function (type) {
                return $http.get('http://localhost:2003/item?type=' + type)
            },
            getItem: function (type, id) {
                return $http.get('http://localhost:2003/item/' + id + '?type=' + type)
            },
            addItem: function (type, obj) {
                return $http.post('http://localhost:2003/item/' + '?type=' + type, obj)
            },
            updateItem: function (type, id, obj) {
                return $http.put('http://localhost:2003/item/' + id + '?type=' + type, obj)
            }
        };
    }])