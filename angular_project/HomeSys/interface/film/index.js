angular.module('app')
    .controller('filmCtrl', ['$scope', '$location', 'modelService', function ($scope, $location, modelService) {
        $scope.list = {
            headers : [
                {id:1, name: 'name', title: 'NAME'},
                {id:2 , name: 'date', title: 'DATE'},
                {id:3, name: 'comment', title: 'COMMENT'}
            ],
            rows: []
        }


        modelService.getList('Film')
        .then((res)=>{
                console.log(res.data);
                $scope.list.rows=res.data;
            })

    }])