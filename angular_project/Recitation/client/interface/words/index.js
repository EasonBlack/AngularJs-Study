angular.module('app')
    .controller('wordCtrl', ['$scope', '$location', 'ngDialog', 'wordListService',
        function ($scope, $location, ngDialog, wordListService) {
            $scope.newword = ()=> {
                ngDialog.open({
                    template: './interface/words/newword.html',
                    controller: 'newwordCtrl'
                })
                    .closePromise.then(function () {
                        init();
                    });
            }

            $scope.rollword = ()=> {
                $location.path('/wordroll')
            }

            $scope.pageTo = (page)=> {
                init(page);
            }

            var init = (page)=> {
                $scope.list =  new wordListService(page);
            }
            init();

        }])