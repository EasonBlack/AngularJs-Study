import moment from 'moment';

angular.module('app')
    .factory('seriesService', ['$http', '$rootScope', function ($http, $rootScope) {
        var Series = function (id) {
            var self = this;
            this.initialize = function () {
                $http.get('http://localhost:2003/series/' + id)
                    .then((res)=> {
                        console.log(res.data);
                        self._id = res.data._id;
                        self.name = res.data.name;
                        self.date = res.data.date;
                        self.status = res.data.status;
                        self.items = res.data.items;
                        self.selected_status = self.status ? $rootScope.series_status.filter((s)=> s.id == self.status)[0] : $rootScope.series_status[2];
                    })
            };

            this.addNew = ()=> {
                self.items.push({num: null, date: moment(new Date()).format('YYYY-MM-DD')});
            }

            this.addItem = (item)=> {
                item.date = moment(item.date).format('YYYY-MM-DD');
                $http.post('http://localhost:2003/series/' + self._id, item)
                    .then((res)=> {
                        self.items = res.data;
                        alert('Success');
                    });
            }

            this.update = ()=> {
                self.date = moment(self.date).format('YYYY-MM-DD');
                self.status = self.selected_status;
                $http.put('http://localhost:2003/series/' + id, self)
                    .then((res)=> {
                        self.name = res.data.name;
                        self.date = res.data.date;
                        self.status = res.data.status;
                        alert('Success');
                    });
            }

            this.deleteItem = (item)=> {
                $http.delete('http://localhost:2003/series/' + self._id + '/' + item._id)
                    .then((res)=> {
                        self.items = res.data;
                        alert('Success');
                    })
            }

            this.updateItem = (item)=> {
                $http.post('http://localhost:2003/series/' + self._id + '/' + item._id, item)
                    .then((res)=> {
                        alert('Success');
                    });
            }

            this.initialize();
        }

        return Series;
    }])