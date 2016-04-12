
export default ($routeProvider)=> {
    $routeProvider
        .when('/home',
        {
            templateUrl: 'interface/manager/index.html',
            controller: 'appCtrl'
        })
        .otherwise({redirectTo: '/home'});

}
