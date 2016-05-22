import moment from 'moment';

angular.module('app')
    .factory('dailyService', ['$http', '$rootScope', 'seriesItemService', 'bookService', 'filmService', 'modelService',
        function ($http, $rootScope, seriesItemService, bookService, filmService, modelService) {
            var Daily = function (date) {
                var self = this;
                self.selectedtype = {};
                self.newitem = {};
                self.newsub = {};

                this.initialize = function () {
                    $http.get('http://localhost:2003/daily/' + date)
                        .then((res)=> {
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
                    if(!self.newitem || !self.newitem.type ) {
                        alert('type something!');
                        return ;
                    }
                    //self.newitem.type = self.selectedtype;
                    $http.post('http://localhost:2003/daily/' + date, self.newitem)
                        .then((res)=> {
                            self.items = res.data.items;
                            self.items.forEach((item)=> {
                                recodeItem(item, function (result) {
                                    item.contentName = result;
                                });
                            });
                            self.newitem = {};
                        })
                }

                this.UpdateItem = function (newitem) {
                    //self.newitem.type = self.selectedtype;
                    $http.post('http://localhost:2003/daily/' + date + '/' + self.newitem._id, self.newitem)
                        .then((res)=> {
                            self.items = res.data.items;
                            self.items.forEach((item)=> {
                                recodeItem(item, function (result) {
                                    item.contentName = result;
                                });
                            });
                            self.newitem = {};
                        })
                }

                this.newItem = function () {
                    self.newitem = {};
                    //self.selectedtype = null;
                    self.newsub = {};
                }

                this.deleteItem = function () {
                    $http.delete('http://localhost:2003/daily/' + date + '/' + self.newitem._id)
                        .then((res)=> {
                            self.initialize();
                            self.newitem = {};
                        })
                }

                this.getPieChartDate = function(items){
                    var chartItems = {};
                    var chartItemsArray =[];
                    items.forEach((item)=> {
                        if (!chartItems[item.type]) {
                            chartItems[item.type] =  parseFloat(item.time);
                        } else {
                            chartItems[item.type] = parseFloat(chartItems[item.type]) + parseFloat(item.time);
                        }
                    })
                    for (var o in chartItems) {
                        chartItemsArray.push({name: o, y: chartItems[o]});
                    }
                    return chartItemsArray;
                }

                this.getItem = function (item) {
                    self.newitem = {};
                    //self.selectedtype = null;
                    self.newsub = {};
                    self.items.forEach(function (i) {
                        if (i._id == item._id) {
                            self.newitem = i;
                            //self.selectedtype = i.type;
                            if (i.type == 'series') {
                                self.newsub = new seriesItemService(item._id);
                                self.newsub.date = date;
                                self.newsub.ref = item._id;
                            } else if (i.type == 'book') {
                                self.newsub = new bookService(item._id);
                                self.newsub.date = date;
                                self.newsub.ref = item._id;
                                console.log(self.newsub);
                            } else if (i.type == 'film') {
                                filmService.getItem(item._id)
                                    .then((res)=> {
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
                            modelService.getItemByRouteAndId('series/items', item._id)
                                .then((res)=> {
                                    var result = res.data && (res.data.seriesname + ' ' + res.data.item.num);
                                    cb(result);
                                })
                            break;
                        case 'book':
                            modelService.getItemByRef('Book', item._id)
                                .then((res)=> {
                                    cb(res.data.name);
                                })
                            break;
                        case 'it':
                            modelService.getItem('IT', item.content)
                                .then((res)=> {
                                    console.log(res.data.name);
                                    cb(res.data.name);
                                })
                            break;
                        case 'film':
                            modelService.getItemByRef('Film', item._id)
                                .then((res)=> {
                                    cb(res.data.name);
                                })
                            break;
                        case 'house':
                            modelService.getItem('House', item.content)
                                .then((res)=> {
                                    cb(res.data.name);
                                })
                            break;
                        case 'study':
                            modelService.getItem('Study', item.content)
                                .then((res)=> {
                                    cb(res.data.name);
                                })
                            break;
                        case 'job':
                            modelService.getItem('Job', item.content)
                                .then((res)=> {
                                    cb(res.data.name);
                                })
                            break;
                    }
                }
                this.initialize();
            }

            return Daily;

        }]);