angular.module('app')
.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            config.headers = {'Authentication':'Basic xxxxxxxxx'}
            return config;
        }
    };
});