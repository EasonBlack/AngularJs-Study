angular.module('app')
    .controller('dailyDetailCtrl', ['$scope', '$routeParams', 'dailyService', function ($scope, $routeParams, dailyService) {
        var self = this;
        self.date = $routeParams.date;
        $scope.control= {
            item_editable:false
        }
        $scope.newItem = {};
        $scope.daily = new dailyService(self.date);
    }]);