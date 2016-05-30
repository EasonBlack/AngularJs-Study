
angular.module('app')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/words',
            {
                templateUrl: 'interface/words/index.html',
                controller: 'wordCtrl'
            })

            .otherwise({redirectTo: '/words'});
    }]);