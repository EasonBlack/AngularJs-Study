import angular from 'angular';

angular.module('app')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home',
            {
                templateUrl: 'interface/home/index.html',
                controller: 'HomeController'
            })

            .otherwise({redirectTo: '/home'});
    }]);
