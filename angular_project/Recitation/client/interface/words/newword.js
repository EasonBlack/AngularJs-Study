angular.module('app')
    .controller('newwordCtrl', ['$scope', 'ngDialog', 'wordService', function ($scope, ngDialog, wordService) {
        var word = new wordService();
        $scope.add = (item)=> {
            word.add(item);
        }
    }])