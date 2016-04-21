import angular from 'angular';

angular.module('app')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/main',
            {
                templateUrl: 'interface/manager/index.html',
                controller: 'mainCtrl'
            })
            .when('/pay-list',
            {
                templateUrl: 'interface/pay-list/index.html',
                controller: 'payListCtrl'
            })
            .when('/confirm',
            {
                templateUrl: 'interface/confirm/index.html',
                controller: 'confirmCtrl'
            })
            .otherwise({redirectTo: '/main'});

    }])
