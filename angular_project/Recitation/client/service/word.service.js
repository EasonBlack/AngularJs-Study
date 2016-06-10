angular.module('app')
    .factory('wordService', ['$http', '$rootScope', 'ngDialog', 'growl', function ($http, $rootScope, ngDialog, growl) {
        class Word {
            constructor() {
                this.name = '';
                this.mean = '';
                this.star = 0;
                this.image = null;
            }

            add(item) {
                var _word = new FormData();
                _word.append("image", item.image ? item.image : '');
                _word.append("name", item.name);
                _word.append("read", item.read);
                _word.append("mean", item.mean);
                _word.append("star", item.star);
                $http({
                    method: 'POST',
                    url: $rootScope.api_url + 'word',
                    data: _word,
                    headers: {
                        'Content-Type': undefined
                    }
                })
                    .then((res)=> {
                        growl.success("Success", {});
                    })
            }
        }

        return Word;
    }]);