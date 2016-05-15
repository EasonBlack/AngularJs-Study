angular.module('app')
    .controller('seriesAddCtrl', ['$scope', '$location', '$http', '$timeout',function ($scope, $location, $http,$timeout) {
        $scope.newseries = {};
        $scope.selectedseries = {};
        $scope.add = ()=> {
            var obj = {}
            obj.name = $scope.newseries.name;
            $http.post('http://localhost:2003/series', obj)
                .then((res)=> {
                    console.log(res);
                })
        }

        $http.get('http://localhost:2003/series')
            .then((res)=> {
                console.log(res.data);
                $scope.series = res.data;
            })


        $scope.addItem = ()=> {
            var obj = {}
            obj = $scope.newitem;
            console.log(obj);
            $http.post('http://localhost:2003/series?id='+ $scope.selectedseries._id , obj)
                .then((res)=> {
                    console.log(res);
                })
            console.log($scope.selectedseries);
        }
    }])