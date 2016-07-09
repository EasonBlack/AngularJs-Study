angular.module('app')
    .factory('fetchService', ['$http', function ($http) {
        return {
            getContectList: ()=> {
                  return ['aa aa','bb bb'];
            },
            getContectById: ()=> {

            }
        }
    }]);