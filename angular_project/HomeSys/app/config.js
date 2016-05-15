angular.module('app')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/dashboard',
            {
                templateUrl: 'interface/dashboard/index.html',
                controller: 'dashboardCtrl'
            })
            .when('/series',
            {
                templateUrl: 'interface/series/index.html',
                controller: 'seriesCtrl'
            })
            .when('/series/add',
            {
                templateUrl: 'interface/series/add.html',
                controller: 'seriesAddCtrl'
            })
            .when('/series/detail/:id',
            {
                templateUrl: 'interface/series/detail.html',
                controller: 'seriesDetailCtrl'
            })
            .otherwise({redirectTo: '/dashboard'});
    }]);