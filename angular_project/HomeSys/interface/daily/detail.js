angular.module('app')
    .controller('dailyDetailCtrl', ['$scope', '$routeParams', 'dailyService', 'chartFactory', function ($scope, $routeParams, dailyService, chartFactory) {
        var self = this;
        self.date = $routeParams.date;
        $scope.info = {};
        $scope.control = {
            item_editable: false,
            chart_show: false
        }
        $scope.newitem = {};

        var init = ()=> {
            $scope.daily = new dailyService(self.date);
        }

        $scope.chart = ()=> {
            if (!$scope.control.chart_show) {
                var chartTimes = $scope.daily.getPieChartDate($scope.daily.items);
                $scope.highchartsNG =  chartFactory.pie('TODAY','total time', chartTimes);
            }
            $scope.control.chart_show = !$scope.control.chart_show;
        }


        $scope.$on('DailyReRender', function () {
            init();
        });
        init();
    }]);