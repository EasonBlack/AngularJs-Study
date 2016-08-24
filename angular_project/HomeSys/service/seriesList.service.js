angular.module('app')
    .factory('seriesListService', ['$http', function ($http) {
        var SeriesList = function (id, name) {
            var self = this;
            var headers = [
                {id: 1, name: 'name', title: 'NAME', type: 'href', href: '#/series/detail/'},
                {id: 2, name: 'date', title: 'DATE'},
                {id: 3, name: 'status', title: 'STATUS'}
            ]

            this.initialize = function () {
                $http.get('http://localhost:2003/series')
                    .then((res)=> {
                        self.rows = _.sortBy(res.data, function (d) {
                            return -1 * d._id
                        });
                        console.log(self.rows);
                        self.headers = headers;
                    })
            };

            this.add = function (name) {
                var obj = {}
                if (!name) return;
                obj.name = name;
                console.log('add series ' + name);
                $http.post('http://localhost:2003/series', obj)
                    .then((res)=> {
                        self.rows = res.data;
                    })
            }

            this.addItem = function (id, item, cb) {
                $http.post('http://localhost:2003/series/' + id, item)
                    .then((res)=> {
                        alert('Success');
                        cb();
                    });
            }

            this.initialize();
        }

        return SeriesList;
    }])