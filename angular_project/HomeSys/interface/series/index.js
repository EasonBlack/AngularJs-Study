angular.module('app')
    .controller('seriesCtrl', ['$scope', '$location', 'seriesListService', function ($scope, $location, seriesListService) {
        $scope.add = ()=> {
            $location.path('series/add')
        }

        $scope.list = new seriesListService();

    }])