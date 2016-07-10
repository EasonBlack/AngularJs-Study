angular.module('app')
    .factory('fetchService', ['$http', '$localForage', function ($http, $localForage) {
        return {
            getContextList: (key)=> {
                return $localForage.getItem(key);
            },
            setContextList: (key, obj)=> {
                return $localForage.setItem(key, obj);
            }
        }
    }]);