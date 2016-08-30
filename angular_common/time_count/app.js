angular.module('app', [])
    .controller('appCtrl', ['$scope', function ($scope) {
        $scope.action = 'start';
        $scope.time = {
            h: 0,
            m: 0,
            s: 0
        }
    }])