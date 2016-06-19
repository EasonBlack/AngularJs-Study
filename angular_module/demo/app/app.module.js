angular.module('app',
    [
        'ngRoute',
        'home.module',
        'about.module',
        'app.components',
        'app.service'
    ])
.config([ '$routeProvider', function( $routeProvider) {
    $routeProvider.otherwise({redirectTo: '/Home'});
}]);
