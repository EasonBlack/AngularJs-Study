import angular from 'angular';

angular.module('app')
    .controller('mainCtrl',['$scope','appSocket', function($scope, socket){

        socket.on('confirm', function(data){
            $scope.$apply(function () {
                $scope.confirm = data.cost;
            });
        });
    }])