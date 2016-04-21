import angular from 'angular';

angular.module('app')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home',
            {
                templateUrl: 'interface/home/home.html',
                controller: 'homeCtrl'
            })
            .when('/info',
            {
                templateUrl: 'interface/home/info.html',
                controller: 'infoCtrl'
            })
            .otherwise({redirectTo: '/home'});

    }]);

