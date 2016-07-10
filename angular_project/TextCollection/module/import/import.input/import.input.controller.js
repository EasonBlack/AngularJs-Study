angular.module('import.module')
    .controller('ImportInputController', ['$scope', 'contextService', 'contextListService'
        , function ($scope, contextService, contextListService) {
            $scope.item = new contextService();

            $scope.add = ()=> {
                if(contextListService.contextList.length >= 5) {
                    return false;
                }
                contextListService.addContext($scope.item);
                $scope.item = null;
                $scope.item = new contextService();
            }
        }])