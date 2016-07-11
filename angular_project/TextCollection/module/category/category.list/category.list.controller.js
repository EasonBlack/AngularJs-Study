angular.module('category.module')
    .controller('CategoryListController', ['$scope', 'contextListService',
        function ($scope, contextListService) {

            contextListService.getContext((data)=> {
                $scope.items = data.filter((d)=> {
                    return !d.type
                });
            })

        }])
