import angular from 'angular';
import _ from 'lodash';

angular.module('app')
    .factory('listService', ['$location', '$q', '$timeout',  function ($location, $q, $timeout) {
        var self = {
            getAll: function (params) {
                var _data = [
                    { "id" : 1, "name": "xxxxx"},
                    { "id" : 1, "name": "xxxxx"},
                    { "id" : 1, "name": "xxxxx"},
                    { "id" : 1, "name": "xxxxx"},
                    { "id" : 2, "name": "xxxxx"},
                    { "id" : 3, "name": "xxxxx"},
                    { "id" : 1, "name": "xxxxx"},
                    { "id" : 1, "name": "xxxxx"},
                    { "id" : 1, "name": "xxxxx"}
                ];

                var _total = _data.length;
                _data = _.slice(_data, params ? params.offset : 0,  (params ? params.offset : 0) +  (params ? params.limit : 5));

                var d = $q.defer();
                $timeout(function(){
                    d.resolve({data: _data, total: _total, pagesize:  (params ? params.limit : 5)});
                }, 0);
                return d.promise;
            }
        };
        return self;
    }]);