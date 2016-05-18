import moment from 'moment'

angular.module('app')
    .controller('seriesAddCtrl', ['$scope', '$location', '$http', '$timeout', 'seriesService', function ($scope, $location, $http,$timeout, seriesService) {
        $scope.newseries = {};
        $scope.selectedseries = {};


        $scope.add = ()=> {
            var obj = {}
            obj.name = $scope.newseries.name;
            $http.post('http://localhost:2003/series', obj)
                .then((res)=> {
                    $scope.series = res.data;
                })
        }

        $http.get('http://localhost:2003/series')
            .then((res)=> {
                $scope.series = res.data;
            })


        $scope.addItem = ()=> {
            var obj = {}
            obj = $scope.newitem;
            obj.date = moment(obj.date).format('YYYY-MM-DD');
            $http.post('http://localhost:2003/series?id='+ $scope.selectedseries._id , obj)
                .then((res)=> {
                    console.log(res);
                })
            console.log($scope.selectedseries);
        }
    }])