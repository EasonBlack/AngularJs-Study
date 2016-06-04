angular.module('app')
    .factory('wordService', ['$http', '$rootScope', 'ngDialog', 'growl', function ($http, $rootScope, ngDialog, growl) {
        class Word {
            constructor() {
                this.name = '';
                this.mean = '';
                this.start = 0;
            }

            add(item) {
                $http.post('http://localhost:2006/api/word', item)
                    .then((res)=> {
                        growl.success("Success", {});
                    });
            }
        }

        return Word;
    }]);