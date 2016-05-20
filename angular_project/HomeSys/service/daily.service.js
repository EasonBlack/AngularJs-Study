import moment from 'moment';

angular.module('app')
    .factory('dailyService', ['$http', '$rootScope', 'seriesItemService', 'bookService',  'itemService', 'itService', 'filmService',
        function ($http, $rootScope, seriesItemService, bookService,itemService, itService,filmService ) {
            var Daily = function (date) {
                var self = this;
                self.selectedtype = {};
                self.newitem = {};
                self.newsub = {};

                var itSerivce = new itService();
                var itemFactory = new itemService();
                this.initialize = function () {
                    $http.get('http://localhost:2003/daily/' + date)
                        .then((res)=> {
                            console.log(res.data);
                            self._id = res.data._id;
                            self.date = res.data.date;
                            self.items = res.data.items;
                            self.items.forEach((item)=> {
                                recodeItem(item, function (result) {
                                    item.contentName = result;
                                });
                            });
                        })
                };

                this.addItem = function (newitem) {
                    self.newitem.type = self.selectedtype;
                    console.log(self.newitem);
                    $http.post('http://localhost:2003/daily/' + date, self.newitem)
                        .then((res)=> {
                            console.log(res.data);
                            self.items = res.data.items;
                            self.items.forEach((item)=> {
                                recodeItem(item, function (result) {
                                    item.contentName = result;
                                });
                            });
                            newitem = {};
                        })
                }

                this.newItem = function () {
                    self.newitem = {};
                    self.selectedtype = null;
                    self.newsub = {};
                }

                this.getItem = function (item) {
                    self.newitem = {};
                    self.selectedtype = null;
                    self.newsub = {};
                    self.items.forEach(function (i) {
                        if (i._id == item._id) {
                            self.newitem = i;
                            self.selectedtype = i.type;
                            if (i.type == 'series') {
                                self.newsub = new seriesItemService(item._id);
                                self.newsub.date = date;
                                self.newsub.ref = item._id;
                            } else if (i.type == 'book') {
                                self.newsub = new bookService(item._id);
                                self.newsub.date = date;
                                self.newsub.ref = item._id;
                            } else if (i.type == 'it') {

                            }else if (i.type == 'film') {
                                filmService.getItem(item._id)
                                .then((res)=>{
                                        self.newsub = res.data;
                                    })
                            }
                            return;
                        }
                    });
                }

                var recodeItem = function (item, cb) {
                    switch (item.type) {
                        case 'series':
                            itemFactory.getItem('series/items', item._id)
                                .then((res)=> {
                                    var result = res.data.seriesname + ' ' + res.data.item.num;
                                    cb(result);
                                });
                            break;
                        case 'book':
                            itemFactory.getItem('book', item._id)
                                .then((res)=> {
                                   cb(res.data.name);
                                });
                            break;
                        case 'it':
                            itSerivce.getItem(item.content)
                                .then((res)=> {
                                    var result = res.data.name;
                                    cb(result);
                                });
                            break;
                        case 'film':
                            itemFactory.getItem('film', item._id)
                                .then((res)=> {
                                    cb(res.data.name);
                                });
                            break;
                    }
                }
                this.initialize();
            }

            return Daily;

        }]);