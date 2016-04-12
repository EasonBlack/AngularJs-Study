import angular from 'angular';

angular.module('app')
    .controller('payCtrl',['$scope','appSocket', function($scope, socket){
         $scope.cost=0;
         $scope.confirm = 0;
         $scope.pay = () => {
             socket.emit('pay', {cost:$scope.cost })
         }

        socket.on('confirm', function(data){
            $scope.$apply(function () {
                $scope.confirm = data.cost;
            });
        });

    }])