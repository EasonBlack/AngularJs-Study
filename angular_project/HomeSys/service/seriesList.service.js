angular.module('app')
    .factory('seriesListService', ['$http',function ($http) {
        var SeriesList = function (id, name) {
            var self = this;
            var headers = [
                {id:1, name: 'name', title: 'NAME', clickable: true, href: '#/series/detail/'},
                {id:2 , name: 'date', title: 'DATE'},
                {id:3, name: 'status', title: 'STATUS'}
            ]

            this.initialize = function () {
                $http.get('http://localhost:2003/series')
                    .then((res)=> {
                        self.rows = res.data;
                        self.headers = headers;
                    })
            };
            this.initialize();
        }

        return SeriesList;
    }])