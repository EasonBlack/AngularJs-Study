angular.module('app')
    .factory('wordFactory', ['$http', '$rootScope', 'ngDialog', 'growl', function ($http, $rootScope, ngDialog, growl) {

        return {
            getWords: function () {
                return $http.get($rootScope.api_url + 'allword')
            }
        }

    }])
