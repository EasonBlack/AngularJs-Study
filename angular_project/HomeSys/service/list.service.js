import moment from 'moment';

angular.module('app')
    .factory('listService', ['$http', '$rootScope', function ($http, $rootScope) {
        var List = function (path) {
            var self = this;
            this.initialize = function () {
                $http.get('http://localhost:2003/' + path)
                    .then((res)=> {
                        console.log(res);
                        self.rows = res.data;
                    })
            };

            this.add = (obj)=> {
                if (!obj) return;
                $http.post('http://localhost:2003/' + path, obj)
                    .then((res)=> {
                        self.rows = res.data;
                    });
            }

            this.initialize();
        }

        return List;
    }]);
