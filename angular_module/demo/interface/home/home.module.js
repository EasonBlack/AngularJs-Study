angular.module('home.module', []);

angular.module('home.module', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/Home', {
            templateUrl: 'interface/home/home.tpl.html',
            controller: 'HomeCtrl'
        });
    }])
    .controller('HomeCtrl', ['$scope',function($scope) {
        $scope.message = "Home";
    }]);