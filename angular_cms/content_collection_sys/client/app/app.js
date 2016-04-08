import angular from 'angular';
import 'angular-route';
import route from './route';
import '../vendor/paging.js';
import 'angular-sanitize'

angular.module('app', ['ngRoute', 'bw.paging', 'ngSanitize'])
    .config(['$routeProvider', function ($routeProvider) {
        route($routeProvider);
    }]);
