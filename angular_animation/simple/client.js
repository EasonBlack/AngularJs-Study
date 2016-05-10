import $ from 'jquery'
import angular from 'angular'

import 'angular-sanitize'
import 'angular-animate'

angular.module('app',['ngSanitize', 'ngAnimate'])
    .controller('MainController',['$scope',function($scope){
           $scope.items = [
               'aaaaaaaaaaa',
               'bbbbbbbbbbb',
               'ccccccccccc'
           ]
           $scope.remove= (i)=>{
               $scope.items.splice(i,1);
           }
    }])


