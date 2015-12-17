angular.module('app')
.controller('appCtrl', ['$scope', "$http", function($scope,$http){

         this.drawSpeed = function(){
            $scope.$broadcast("drawSpeed", $scope.speed);
         }
         this.drawPause = function(){
             $scope.$broadcast("drawPause");
         }
         this.drawPlay = function(){
             $scope.$broadcast("drawPlay");
         }
         $http.get('data/test.json')
             .then(function(result){
                 $scope.$broadcast("initCanvas", result.data);
             });

    }]);