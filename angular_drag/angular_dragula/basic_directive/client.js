import angular from  'angular'
import angularDragula from 'angular-dragula';
import uuid from 'node-uuid';


angular.module('app', [angularDragula(angular)])
    .controller('appCtrl', ['$scope', 'dragulaService', function ($scope, dragulaService) {
        $scope.info = {
            boxes: [
                {id: uuid.v1(), title: '', camera: false},
                {id: uuid.v1(), title: '', camera: false}
            ]
        }
        $scope.addNew = function () {
            $scope.info.boxes.push({id: uuid.v1(), title: '', camera: false});
        }
        $scope.toggleEditable = function () {
            $scope.info.uneditable = !$scope.info.uneditable
        }

    }])
    .directive('dragBox', function () {
        return {
            restrict: 'E',
            scope: {
                list: '=',
                uneditable: '='
            },
            templateUrl: 'demo.directive.html',
            controller: ['$scope', 'dragulaService', function ($scope, dragulaService) {
                dragulaService.options($scope, 'drag-container', {
                    moves: function (el, container, handle) {
                        if (handle.className.indexOf('handle') != -1) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                });
            }],
            link: function (scope, ele, attr) {
                scope.delete = function (id) {
                    for (var i = scope.list.length - 1; i >= 0; i--) {
                        if (scope.list[i].id == id) {
                            scope.list.splice(i, 1);
                        }
                    }
                }

                scope.toggleCamera = function (box) {
                    box.camera = !box.camera;
                }
            }
        }
    })

