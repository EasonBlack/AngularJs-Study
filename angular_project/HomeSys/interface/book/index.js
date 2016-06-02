angular.module('app')
    .controller('bookCtrl', ['$scope', '$location', 'modelService', 'ngDialog', function ($scope, $location, modelService, ngDialog) {
        $scope.selectedBook = {};
        $scope.control = {
            indexNav: 1
        }
        $scope.openUpdate = (book)=> {
            $scope.selectedBook = book;
            ngDialog.open({
                template: 'interface/book/book.something.update.html',
                scope: $scope
            })
        }

        $scope.list = {
            headers: [
                {id: 1, name: 'name', title: 'NAME', type: 'click', click: $scope.openUpdate},
                {id: 2, name: 'author', title: 'AUTHOR'},
                {id: 3, name: 'date', title: 'DATE'},
                {id: 4, name: 'comment', title: 'COMMENT'}
            ],
            rows: []
        }

        $scope.setTab = (key)=>{
            $scope.control.indexNav = key;
        }

        var init = ()=> {
            modelService.getList('Book')
                .then((res)=> {
                    console.log(res.data);
                    $scope.list.rows = res.data;
                })
        }
        init();

        $scope.cancel = ()=> {
            ngDialog.close();
        }

        $scope.confirm = ()=> {
            modelService.updateItem('Book', $scope.selectedBook._id, $scope.selectedBook)
                .then((res)=> {
                    ngDialog.close();
                    init();
                })
        }


    }])