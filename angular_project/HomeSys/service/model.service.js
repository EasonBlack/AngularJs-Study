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
            getItemByRef: function(type,id) {
                return $http.get('http://localhost:2003/itembyref/' + id + '?type=' + type)
            },
            getItemByRouteAndId: function(path, id) {
                return  $http.get('http://localhost:2003/'+ path +'/' + id)
            },
            addItem: function (type, obj) {
                return $http.post('http://localhost:2003/item/' + '?type=' + type, obj)
            },
            updateItem: function (type, id, obj) {
                return $http.put('http://localhost:2003/item/' + id + '?type=' + type, obj)
            },
            deleteItem: function (type, id) {
                return $http.delete('http://localhost:2003/item/' + id + '?type=' + type)
            }

        };
    }])