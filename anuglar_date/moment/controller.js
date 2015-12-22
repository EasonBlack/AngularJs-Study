angular.module('app')
.controller('appCtrl', ['$scope', 'moment', function($scope, moment){

        $scope.startTime = "2015-12-15 10:00:00";
        $scope.endTime ="2015-12-15 11:00:00";

        var _startTime = moment($scope.startTime);
        var _endTime = moment($scope.endTime);
        $scope.spanTime = _endTime.diff(_startTime, 'minutes')

    }]);
