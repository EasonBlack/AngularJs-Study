import $ from 'jquery'
import angular from 'angular'

import 'angular-sanitize'

angular.module('app', ['ngSanitize'])
    .controller('MainController', ['$scope', function ($scope) {
        $scope.editable = false;
        $scope.info = {
            school : {
                title: 'SCHOOL',
                val: 'COLA SCHOOL'
            },
            degree: {
                title: 'DEGREE',
                val: 'Master'
            }
        }
        $scope.switchEdit = ()=> {
            $scope.editable = !$scope.editable;
        }
        $scope.confirm = ()=> {
            console.log($scope.school);
        }
    }])
    .directive('appEditableInput', function () {
        return {
            restrict: 'E',
            scope: {
                title: '=',
                val: '=',
                editable: '='
            },
            templateUrl: 'component/app.editable.input.html',
            link: function (scope, ele, attr) {
            }
        }
    })



