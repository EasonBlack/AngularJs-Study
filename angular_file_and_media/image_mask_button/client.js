import $ from 'jquery'
import angular from 'angular'

import 'angular-sanitize'

angular.module('app',['ngSanitize'])
    .controller('MainController',['$scope',function($scope){
           $scope.text = 'This is test'
    }])


