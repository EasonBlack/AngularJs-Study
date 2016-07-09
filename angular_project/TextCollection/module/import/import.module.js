

angular.module('import.module',
    [
        'ui.router'
    ])
    .controller('ImportInputController', ['$scope', function ($scope) {
        $scope.message = 'Hello';
    }])
    .controller('ImportListController', ['$scope', function ($scope) {
        $scope.message = 'World';
    }])