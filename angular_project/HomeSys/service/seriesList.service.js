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
                        console.log(res.data);
                        self.rows = res.data;
                        self.headers = headers;
                    })
            };

            this.add = function(name){
                var obj = {}
                if(!name) return ;
                obj.name = name;
                console.log('add series ' + name);
                $http.post('http://localhost:2003/series', obj)
                    .then((res)=> {
                        self.rows = res.data;
                    })
            }

            this.addItem = function(id,item) {
                $http.post('http://localhost:2003/series/' + id, item)
                    .then((res)=> {
                        alert('Success');
                    });
            }

            this.initialize();
        }

        return SeriesList;
    }])