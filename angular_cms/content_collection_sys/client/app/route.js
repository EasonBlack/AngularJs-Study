
export default ($routeProvider)=> {
    $routeProvider
        .when('/home',
        {
            templateUrl: 'interface/home/index.html',
            controller: 'appCtrl'
        })
        .when('/add',
        {
            templateUrl: 'interface/home/add.html',
            controller: 'addCtrl'
        })
        .when('/list',
        {
            templateUrl: 'interface/home/list.html',
            controller: 'listCtrl'
        })
        .otherwise({redirectTo: '/home'});

}
