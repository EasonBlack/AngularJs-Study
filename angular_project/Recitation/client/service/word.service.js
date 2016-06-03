angular.module('app')
    .factory('wordService', ['$http', '$rootScope', 'ngDialog', function ($http, $rootScope, ngDialog) {
        class Word {
            constructor() {
                this.name = '';
                this.mean = '';
                this.start = 0;
            }

            add(item) {
                $http.post('http://localhost:2006/api/word', item)
                    .then((res)=> {
                         alert('Success');
                    });
            }
        }

        return Word;
    }]);