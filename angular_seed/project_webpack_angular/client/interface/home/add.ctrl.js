import angular from 'angular';

angular.module('app')
    .controller('addCtrl', ['$scope', function ($scope) {
        $scope.box = {
             name: {
                 title: "NAME"
             },
             type: {
                 title: "TYPE"
             }
        }

        $scope.items = [
            {id: 1, name : 'aaaa'},
            {id: 2, name : 'bbbb'},
            {id: 3, name : 'cccc'},
            {id: 4, name : 'dddd'},
            {id: 5, name : 'eeee'}
        ]


        $scope.getResult = ()=>{
            console.log($scope.box);
        }
    }])
