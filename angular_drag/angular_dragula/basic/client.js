import angular from  'angular'
import angularDragula from 'angular-dragula';
import uuid from 'node-uuid';


angular.module('app', [angularDragula(angular)])
    .controller('appCtrl', ['$scope', 'dragulaService', function ($scope, dragulaService) {
        $scope.items = [
            {title: 'AAAAA'},
            {title: 'BBBBB'},
            {title: 'CCCCC'}
        ]

        $scope.boxes =[
            {id: uuid.v1(),title: 'aaaaa', camera:false},
            {id: uuid.v1(),title: 'bbbbb', camera:false}
        ]

        $scope.confirm = function(){
           console.log($scope.items);
        }

        $scope.addNew = function(){
            $scope.boxes.push({id: uuid.v1(),title: '',camera:false});
        }

        $scope.delete = function(id){
            for(var i= $scope.boxes.length-1;i>=0;i--){
                if($scope.boxes[i].id == id) {
                    $scope.boxes.splice(i, 1);
                }
            }
        }

        $scope.toggleCamera = function(box) {
            box.camera = !box.camera;
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



        dragulaService.options($scope, 'bag-two', {
            moves: function (el, container, handle) {
                if(handle.className.indexOf('handle')!=-1) {
                    return true;
                } else {
                    return false;
                }
            }
        });
    }])

