angular.module('app')
.factory('temp1Service', ['$location', 'lodash', '$q', '$timeout',  function ($location,_, $q, $timeout) {
        var self = {
            getAll: function (params) {
                var _data = [
                    { "id" : 1, "title": "xxxxx", "startTime": '2016-01-01', "endTime": '2016-01-01'},
                    { "id" : 1, "title": "xxxxx", "startTime": '2016-01-01', "endTime": '2016-01-01'},
                    { "id" : 1, "title": "xxxxx", "startTime": '2016-01-01', "endTime": '2016-01-01'},
                    { "id" : 1, "title": "xxxxx", "startTime": '2016-01-01', "endTime": '2016-01-01'},
                    { "id" : 2, "title": "xxxxx", "startTime": '2016-01-01', "endTime": '2016-01-01'},
                    { "id" : 3, "title": "xxxxx", "startTime": '2016-01-01', "endTime": '2016-01-01'},
                    { "id" : 1, "title": "xxxxx", "startTime": '2016-01-01', "endTime": '2016-01-01'},
                    { "id" : 1, "title": "xxxxx", "startTime": '2016-01-01', "endTime": '2016-01-01'},
                    { "id" : 1, "title": "xxxxx", "startTime": '2016-01-01', "endTime": '2016-01-01'}
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