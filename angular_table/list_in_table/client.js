import $ from 'jquery'
import angular from 'angular'

import 'angular-sanitize'

angular.module('app',['ngSanitize'])
    .controller('MainController',['$scope',function($scope){
           $scope.rows = [
               {name: 'Meeting Room I', id: '1',  type:'room', task: [ { title: 'clean 1' }, {title: 'clean 2'}]},
               {name: 'Meeting Room II', id: '2',  type:'room', task: [ { title: 'check 1' }, {title: 'check 2'}]},
               {name: 'Rest Room I', id: '3',  type:'room', task: [ { title: 'check 1' }]},
               {name: 'Rest Room II', id: '3',  type:'room', task: [ { title: 'check 1' }, {title: 'clean 2'}]}
           ]

           $scope.headers = Object.keys($scope.rows[0]);

          $scope.isTask= (item)=> {
              return Array.isArray(item);
          }
    }])


