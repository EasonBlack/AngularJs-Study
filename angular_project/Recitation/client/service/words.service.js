angular.module('app')
    .factory('wordListService', ['$http', '$rootScope', 'ngDialog', function ($http, $rootScope, ngDialog) {
        class WordList {
            constructor(page = 1) {
                $http.get('http://localhost:2006/api/word', {params: {page: page}})
                    .then((res)=> {

                        this.rows = res.data.data;
                        this.headers = [
                            {id: 1, name: 'name', title: 'NAME' },
                            {id: 2, name: 'mean', title: 'MEAN'},
                            {id: 3, name: 'star', title: 'STAR'}
                        ]
                        this.size = 10;
                        this.count = res.data.count;
                        this.page = page;

                    })
            }

            add(item) {
                $http.post('http://localhost:2006/api/word', item)
                    .then((res)=> {
                        alert('Success');
                    });
            }
        }

        return WordList;
    }]);