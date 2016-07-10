

angular.module('import.module',
    [
        'ui.router'
    ])

    .controller('ImportListController', ['$scope', function ($scope) {
        $scope.message = 'World';
    }])