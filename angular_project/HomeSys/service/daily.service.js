import moment from 'moment';

angular.module('app')
    .factory('dailyService', ['$http', '$rootScope', 'seriesItemService', 'bookService',function ($http, $rootScope, seriesItemService, bookService) {
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
                self.selectedtype = null;
                self.newsub = {};
            }

            this.getItem = function(item){
                self.newitem = {};
                self.selectedtype = null;
                self.newsub = {};
                self.items.forEach(function(i){
                    if(i._id == item._id) {
                        self.newitem = i;
                        self.selectedtype = i.type;
                        if(i.type=='series') {
                            self.newsub = new seriesItemService(item._id);
                            self.newsub.date = date;
                            self.newsub.ref= item._id;
                        } else if (i.type=='book') {
                            self.newsub = new bookService(item._id);
                            self.newsub.date = date;
                            self.newsub.ref= item._id;
                        } else if (i.type=='it') {

                        }
                        return ;
                    }
                 });
            }
            this.initialize();
        }

        return Daily;

    }]);