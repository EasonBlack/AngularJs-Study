import angular from 'angular';

angular.module('app')
    .controller('ProtectionController', ['$scope', 'ngDialog', function ($scope, ngDialog) {
        $scope.add = () => {
            ngDialog.open({
                template: './interface/protection/add.html',
                controller: 'ProtectionAddController',
                closeByDocument: false
            });
        }
    }])