import moment from 'moment';

angular.module('app')
    .factory('itService', ['$http', '$rootScope', function ($http, $rootScope) {
        var IT = function () {
            var self = this;
            this.initialize = function () {
                $http.get('http://localhost:2003/it')
                    .then((res)=> {
                        console.log(res);
                        self.rows = res.data;
                    })
            };

            this.add = (name)=> {
                if(!name) return ;
                var obj = {};
                obj.name = name;
                $http.post('http://localhost:2003/it', obj)
                    .then((res)=> {
                        self.rows = res.data;
                    });
            }

            this.initialize();
        }

        return IT;
    }])