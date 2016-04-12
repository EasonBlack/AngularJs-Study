
export default ($routeProvider)=> {
    $routeProvider
        .when('/main',
        {
            templateUrl: 'interface/manager/index.html',
            controller: 'mainCtrl'
        })
        .when('/customerlist',
        {
            templateUrl: 'interface/customerList/index.html',
            controller: 'customerListCtrl'
        })
        .when('/confirm',
        {
            templateUrl: 'interface/confirm/index.html',
            controller: 'confirmCtrl'
        })
        .otherwise({redirectTo: '/main'});

}
