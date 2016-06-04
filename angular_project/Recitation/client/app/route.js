angular.module('app')
    .config(['$routeProvider', 'growlProvider', function ($routeProvider, growlProvider) {
        growlProvider.globalTimeToLive(3000);
        growlProvider.globalDisableCountDown(true);
        $routeProvider
            .when('/words',
            {
                templateUrl: 'interface/words/index.html',
                controller: 'wordCtrl'
            })
            .otherwise({redirectTo: '/words'});
    }]);