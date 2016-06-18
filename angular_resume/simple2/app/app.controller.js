angular.module('app')
    .controller('appCtrl', ['$scope', '$http', 'MySelfService', function ($scope, $http, MySelfService) {
        $scope.info = new MySelfService();
        $scope.getNumber = function(num) {
            num = parseInt(num);
            return new Array(num);
        }
    }]);