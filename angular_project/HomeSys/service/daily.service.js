import moment from 'moment';

angular.module('app')
    .factory('dailyService', ['$http', '$rootScope', function ($http, $rootScope) {
        var Daily = function (date) {
            var self = this;
            self.selectedtype = {};
            this.initialize = function () {
                $http.get('http://localhost:2003/daily/' + date)
                    .then((res)=> {
                        console.log(res.data);
                        self._id = res.data._id;
                        self.date = res.data.date;
                        self.items = res.data.items;
                    })
            };

            this.addItem = function (newitem) {
                newitem.type = self.selectedtype.id;
                $http.post('http://localhost:2003/daily/' + date, newitem)
                    .then((res)=> {
                        console.log(res.data);
                        self.items = res.data.items;
                        newitem = {};
                    })
            }
            this.initialize();
        }

        return Daily;

    }]);