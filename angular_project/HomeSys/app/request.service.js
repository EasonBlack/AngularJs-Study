angular.module('app')
.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            config.headers['Authorization'] = 'Basic xxxxxxxxx';
            return config;
        }
    };
});