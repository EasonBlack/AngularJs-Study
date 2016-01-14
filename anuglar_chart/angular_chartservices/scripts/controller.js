angular.module('app')
    .controller('appCtrl', ['$scope', '$http', 'chartLine', function ($scope, $http, chartLine) {
        $scope.items = [];
        $scope.dataType = [
            {id:1,name:'line'},
            {id:2,name:'bar'}
        ];


        $scope.add = function(){
            $scope.items.push({})
        }

        $scope.setChart = function(item, index){

            switch(item.typeId) {
                case 1:
                    getLine(item, index);
                    break;
                case 2:
                    //getBar();
                    break;
            }
        }

        function getLine(item, index) {
            var _chartline = new chartLine();
            $scope.items[index].config = _chartline.config
        }

    }]);