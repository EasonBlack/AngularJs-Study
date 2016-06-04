angular.module('app')
    .controller('wordCtrl', ['$scope', 'ngDialog', 'wordListService', function ($scope, ngDialog, wordListService) {
        $scope.newword = ()=> {
            ngDialog.open({
                template: './interface/words/newword.html',
                controller: 'newwordCtrl'
            })
                .closePromise.then(function () {
                    init();
                });
        }

        $scope.pageTo = (page)=>{
            console.log(page)
            init(page);
        }

        var init = (page)=> {
            $scope.list = new wordListService(page);
        }
        init();

    }])