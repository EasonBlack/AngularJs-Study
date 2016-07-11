angular.module('import.module')
    .controller('ImportListController', ['$scope', 'contextService', 'contextListService'
        , function ($scope, contextService, contextListService) {

            $scope.list = contextListService.getList();

            $scope.delete = (c)=>{
                contextListService.deleteContext(c);
            }

            $scope.save =()=>{
                contextListService.saveContext(()=>{
                    $scope.list = contextListService.getList();
                });
            }

        }])