angular.module('category.module')
    .controller('CategoryController', ['$scope', 'contextListService', 'contextService', '$timeout',
        function ($scope, contextListService, contextService, $timeout) {


            let init = ()=> {
                contextListService.getContext()
                    .then(()=> {
                        $scope.items = contextListService.contextSavedList;
                    })
            }
            init();

            $scope.types = [
                {name: 'start', checked: false},
                {name: 'high', checked: false},
                {name: 'end', checked: false}
            ];

            $scope.set = (types)=> {
                contextListService.setType(types);
                contextListService.saveTotalContext()
                    .then(()=> {
                        init();
                    });
            }
        }])