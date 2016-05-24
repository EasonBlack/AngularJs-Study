angular.module('app')
    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptor');
        $routeProvider
            .when('/dashboard',
            {
                templateUrl: 'interface/dashboard/index.html',
                controller: 'dashboardCtrl'
            })
            .when('/daily',
            {
                templateUrl: 'interface/daily/index.html',
                controller: 'dailyCtrl'
            })
            .when('/daily/detail/:date',
            {
                templateUrl: 'interface/daily/detail.html',
                controller: 'dailyDetailCtrl'
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
            .when('/film',
            {
                templateUrl: 'interface/film/index.html',
                controller: 'filmCtrl'
            })
            .when('/book',
            {
                templateUrl: 'interface/book/index.html',
                controller: 'bookCtrl'
            })
            .otherwise({redirectTo: '/dashboard'});
    }])
