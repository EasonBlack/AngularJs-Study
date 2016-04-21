import angular from 'angular';

angular.module('app')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/main',
            {
                templateUrl: 'interface/customer/index.html',
                controller: 'mainCtrl'
            })
            .when('/pay',
            {
                templateUrl: 'interface/customer/pay.html',
                controller: 'payCtrl'
            })
            .when('/confirm',
            {
                templateUrl: 'interface/confirm/index.html',
                controller: 'confirmCtrl'
            })
            .otherwise({redirectTo: '/main'});
    }]);

