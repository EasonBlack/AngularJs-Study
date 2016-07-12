// class CategoryController {
//     constructor($scope, contextListService, contextService) {
//         this.$scope = $scope;
//         this.$scope.types = [
//             {name: 'start', checked: false},
//             {name: 'high', checked: false},
//             {name: 'end', checked: false}
//         ];
//         $scope.items = [];
//         this.contextListService = contextListService;
//         this.init();
//     }
//
//     init() {
//         let self = this;
//         this.contextListService.getContext()
//             .then(()=> {
//                 console.log(this);
//                 this.$scope.items = this.contextListService.contextSavedList;
//             })
//     }
//
//     set(types) {
//         let self = this;
//         this.contextListService.setType(types);
//         this.contextListService.saveTotalContext()
//             .then(()=> {
//                 self.init();
//             });
//     }
// }
//
// CategoryController.$inject = ['$scope', 'contextListService', 'contextService'];
//
// export {CategoryController}

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