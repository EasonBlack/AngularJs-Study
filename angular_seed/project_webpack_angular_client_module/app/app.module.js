import angular from 'angular';

angular.module('app',
    [
        'ui.router',
        'view1.module',
        'view2.module'
    ])
.config([ '$urlRouterProvider',function( $urlRouterProvider) {
        $urlRouterProvider.otherwise("/view1");
}]);
