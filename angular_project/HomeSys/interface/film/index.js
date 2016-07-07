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

        var init = (obj)=> {

            modelService.getList('Film')
                .then((res)=> {

                    console.log(res.data);
                    $scope.rows  = res.data;
                    let page = obj.page;
                    let page_size =10;
                    $scope.list.rows = _.slice( $scope.rows ,(page-1)*page_size, (page-1)*page_size + page_size)
                    $scope.list.size = page_size;
                    $scope.list.count = res.data.length;
                    $scope.list.page = parseInt(page) ;
                })
        }
        init({page: 1});

        $scope.pageTo = (page)=> {
            let page_size =10;
            $scope.list.rows = _.slice( $scope.rows ,(page-1)*page_size, (page-1)*page_size + page_size)
            $scope.list.page = parseInt(page) + 1;
        }

        $scope.cancel = ()=> {
            ngDialog.close();
        }

        $scope.confirm = ()=> {
            modelService.updateItem('Film', $scope.selectedFilm._id, $scope.selectedFilm)
                .then((res)=> {
                    ngDialog.close();
                    init({page: 1});
                })
        }


    }])