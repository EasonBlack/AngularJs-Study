angular.module('app')
    .factory('MySelfService', ['$http', function ($http) {
        var MySelf = function (obj) {
            var self = this;
            this.initialize = function () {
                $http.get('data/demo.json')
                    .then(function (res) {
                        self =  Object.assign(self, res.data)
                    })
            };


            this.initialize();
        }

        return MySelf;
    }]);