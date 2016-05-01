angular.module('app', []).controller('appCtrl', ['$scope', 'appService',function ($scope,appService) {
    $scope.getName = function () {
        $scope.name = 'Eason';
    }
    this.getServiceName = function(){
        appService.get().then(function(res){
            $scope.another = res.value;
        })
    }
    this.getServiceName();
}])
    .factory('appService', ['$http', function ($http) {
        return {
            get: function () {
                return $http.get('data.json');
            }
        }
    }]);
