import angular from 'angular';
import 'angular-route';
import 'angular-sanitize'

angular.module('app', ['ngRoute', 'ngSanitize', 'ui.calendar'])
    .controller('appCtrl', ['$scope', function ($scope) {
    }]);