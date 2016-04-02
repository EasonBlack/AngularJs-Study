angular.module('app',['ngLodash', 'ngRoute', 'bw.paging', 'ngSanitize'])
    .config(['$routeProvider', function ($routeProvider) {
        window.xroutes.general($routeProvider);
    }]);