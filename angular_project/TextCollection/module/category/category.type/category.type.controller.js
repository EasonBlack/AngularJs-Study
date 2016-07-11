angular.module('category.module')
    .controller('CategoryTypeController', ['$scope', 'contextListService',
        function ($scope, contextListService) {
            $scope.types = [
                {name: 'start'},
                {name: 'high'},
                {name: 'end'}
            ];
            $scope.currentType = [];
            $scope.set = ()=> {

            }
            $scope.setCurrent = (type)=> {

            }
        }])