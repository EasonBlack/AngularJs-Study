
export default ($routeProvider)=> {
    $routeProvider
        .when('/home',
        {
            templateUrl: 'interface/customer/index.html',
            controller: 'appCtrl'
        })
        .otherwise({redirectTo: '/home'});

}
