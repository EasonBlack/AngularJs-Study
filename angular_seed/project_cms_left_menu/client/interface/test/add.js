import angular from 'angular'

import '../../components/input/app.input'

angular.module('app')
    .controller('TestController', ['$scope', function ($scope) {
        $scope.info = {
            name: {
                title: 'NAME',
                value: ''
            },
            address: {
                title: 'ADDRESS',
                value: ''
            }
        }

        $scope.getResult = ()=> {
            var result = {};
            Object.keys($scope.info).map(function(value, index) {
                result[value] =$scope.info[value].value;
            });
            console.log(result);
        }
    }])