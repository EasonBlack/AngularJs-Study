angular.module('category.module',
    [
        'ui.router'
    ])
    .controller('CategoryListController', ['$scope', function ($scope) {
        $scope.message = 'Helle';
    }])
    .controller('CategoryTypeController', ['$scope', function ($scope) {
        $scope.message = 'World 2';
    }])