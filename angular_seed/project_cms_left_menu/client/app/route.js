import angular from 'angular';

angular.module('app')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/dashboard',
            {
                templateUrl: 'interface/dashboard/index.html',
                controller: 'DashBoardController'
            })
            .when('/location',
            {
                templateUrl: 'interface/location/index.html',
                controller: 'LocationController'
            })
            .when('/location/add',
            {
                templateUrl: 'interface/location/add.html',
                controller: 'LocationAddController'
            })
            .when('/protection',
            {
                templateUrl: 'interface/protection/index.html',
                controller: 'ProtectionController'
            })
            .when('/protection/add',
            {
                templateUrl: 'interface/protection/add.html',
                controller: 'ProtectionAddController'
            })
            .when('/maintenance',
            {
                templateUrl: 'interface/maintenance/index.html',
                controller: 'MaintenanceController'
            })
            .when('/maintenance/add',
            {
                templateUrl: 'interface/Maintenance/add.html',
                controller: 'MaintenanceAddController'
            })
            .when('/employee',
            {
                templateUrl: 'interface/employee/index.html',
                controller: 'EmployeeController'
            })
            .when('/employee/add',
            {
                templateUrl: 'interface/employee/add.html',
                controller: 'EmployeeAddController'
            })
            .when('/test',
            {
                templateUrl: 'interface/test/add.html',
                controller: 'TestController'
            })


            .otherwise({redirectTo: '/dashboard'});
    }]);
