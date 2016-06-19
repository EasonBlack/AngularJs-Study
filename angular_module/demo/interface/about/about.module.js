angular.module('about.module', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/About', {
            templateUrl: 'interface/about/about.tpl.html',
            controller: 'AboutCtrl'
        });
    }])
    .controller('AboutCtrl', ['$scope', 'common.service', function($scope, common) {
        $scope.message = "About";
        $scope.getDate = function(){
          $scope.message =  common.getDate();
        }
    }]);