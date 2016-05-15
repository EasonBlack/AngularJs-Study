angular.module('app')
    .controller('seriesDetailCtrl', ['$scope', '$location', '$routeParams', 'seriesService', function ($scope, $location, $routeParams, seriesService) {
        var id = $routeParams.id;
        $scope.series = new seriesService(id);
        $scope.control = {
            detail_editable: false,
            episode_editable: false
        }
        $scope.edit=()=>{
            $scope.control.detail_editable = ! $scope.control.detail_editable;
        }
        $scope.editEp = ()=>{
            $scope.control.episode_editable = ! $scope.control.episode_editable;
        }

        $scope.addEp = ()=> {
            $scope.series.addNew();
        }

    }])