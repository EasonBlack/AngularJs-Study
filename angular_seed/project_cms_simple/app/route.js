window.xroutes = window.xroutes || {};
window.xroutes.general = function ($routeProvider) {
    $routeProvider
        .when('/home',
        {
            templateUrl: 'interface/home/index.html',
            controller: 'HomeController'
        })
        .when('/temp1',
        {
            templateUrl: 'interface/temp1/list/index.html',
            controller: 'Temp1Controller'
        })
        .when('/temp1/edit',
        {
            templateUrl: 'interface/temp1/edit/edit.html',
            controller: 'Temp1EditController'
        })
        .when('/temp2',
        {
            templateUrl: 'interface/temp2/index.html',
            controller: 'Temp2Controller'
        })
        .otherwise({redirectTo: '/home'});

}