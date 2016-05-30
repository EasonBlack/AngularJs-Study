angular.module('app')
    .controller('wordCtrl', ['$scope', 'ngDialog', function ($scope, ngDialog) {
        $scope.newword = ()=> {

            ngDialog.open({
                template: './interface/words/newword.html',
                controller: 'newwordCtrl'
            })
        }
    }])