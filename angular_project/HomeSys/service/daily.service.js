import moment from 'moment';

angular.module('app')
    .factory('dailyService', ['$http', '$rootScope', function ($http, $rootScope) {
        var Daily = function (date) {
            var self = this;
            self.selectedtype = {};
            self.newitem = {};
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
                this.newitem.type = self.selectedtype.id;
                $http.post('http://localhost:2003/daily/' + date, self.newitem)
                    .then((res)=> {
                        console.log(res.data);
                        self.items = res.data.items;
                        newitem = {};
                    })
            }

            this.getItem = function(item){
                self.items.forEach(function(i){
                    if(i._id == item._id) {
                        self.newitem = i;
                        return ;
                    }
                 });
            }
            this.initialize();
        }

        return Daily;

    }]);