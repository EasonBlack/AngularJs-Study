window.xroutes = window.xroutes || {};
window.xroutes.general = function ($routeProvider) {
    $routeProvider
        .when('/home',
        {
            templateUrl: 'interface/home/index.html',
            controller: 'HomeController'
        })
        .when('/add',
        {
            templateUrl: 'interface/home/add.html',
            controller: 'AddController'
        })

        .otherwise({redirectTo: '/home'});

}