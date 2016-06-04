angular.module('app')
    .controller('newwordCtrl', ['$scope', 'ngDialog', 'wordService','growl', function ($scope, ngDialog, wordService, growl) {
        var word = new wordService();
        $scope.add = (item)=> {
            word.add(item);
            ngDialog.close();
        }
    }])