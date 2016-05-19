import moment from 'moment';

angular.module('app')
    .factory('dailyService', ['$http', '$rootScope', function ($http, $rootScope) {
        var Daily = function (date) {
            var self = this;
            self.selectedtype = {};
            self.newitem = {};
            self.newsub = {};
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
                self.newitem.type = self.selectedtype;
                console.log(self.newitem);
                $http.post('http://localhost:2003/daily/' + date, self.newitem)
                    .then((res)=> {
                        console.log(res.data);
                        self.items = res.data.items;
                        newitem = {};
                    })
            }

            this.newItem = function(){
                self.newitem = {};
            }

            this.getItem = function(item){
                self.items.forEach(function(i){
                    if(i._id == item._id) {
                        self.newitem = i;
                        self.selectedtype = i.type;
                        return ;
                    }
                 });
            }
            this.initialize();
        }

        return Daily;

    }]);