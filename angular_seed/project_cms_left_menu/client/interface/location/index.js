import angular from 'angular';

angular.module('app')
    .controller('LocationController', ['$scope', 'ngDialog',  function ($scope, ngDialog) {
         $scope.add = () => {
             ngDialog.open({
                 template: './interface/location/add.html',
                 controller: 'LocationAddController',
                 closeByDocument: false
             });
         }
    }])