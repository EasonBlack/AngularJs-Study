angular.module('app')
    .controller('filmCtrl', ['$scope', '$location', 'modelService', 'ngDialog', function ($scope, $location, modelService, ngDialog) {
        $scope.selectedFilm = {};
        $scope.openUpdate = (film)=> {
            $scope.selectedFilm = film;
            ngDialog.open({
                template: 'interface/film/film.something.update.html',
                scope: $scope
            })
        }

        $scope.list = {
            headers: [
                {id: 1, name: 'name', title: 'NAME', type: 'click', click: $scope.openUpdate},
                {id: 2, name: 'date', title: 'DATE'},
                {id: 3, name: 'comment', title: 'COMMENT'}
            ],
            rows: []
        }

        var init = ()=> {
            modelService.getList('Film')
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
            modelService.updateItem('Film', $scope.selectedFilm._id, $scope.selectedFilm)
                .then((res)=> {
                    ngDialog.close();
                    init();
                })
        }


    }])