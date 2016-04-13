import angular from 'angular';
import 'angular-route';
import route from './route.customer';
import 'angular-sanitize'

angular.module('app', ['ngRoute',  'ngSanitize'])
    .config(['$routeProvider', function ($routeProvider) {
        route($routeProvider);
    }])
    .controller('appCtrl',['$scope',function($scope){

    }])
