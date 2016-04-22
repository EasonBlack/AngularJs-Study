import angular from  'angular'
import angularDragula from 'angular-dragula';
angular.module('app', [angularDragula(angular)])
    .controller('appCtrl', ['$scope', 'dragulaService', function ($scope, dragulaService) {
        $scope.items = [
            {title: 'AAAAA'},
            {title: 'BBBBB'},
            {title: 'CCCCC'}
        ]

        $scope.confirm = function(){
           console.log($scope.items);
        }

        dragulaService.options($scope, 'bag-one', {
            moves: function (el, container, handle) {
                if(handle.className.indexOf('handle')!=-1) {
                    return true;
                } else {
                    return false;
                }
            }
        });
    }])

