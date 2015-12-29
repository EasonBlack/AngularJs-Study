angular.module('app')
    .controller('appCtrl', ['$scope', '$http', 'chartLine', function ($scope, $http, chartLine ) {
         $scope.items = [];

         var _line =  {
             type: 'line',
             categories : ['2001', '2002', '2003', '2004', '2005'],
             data : [10, 15, 12, 8, 7],
             name: 'xxxxx',
             title: 'AAAAA'
         }
        chartLine.setConfig(_line)
        _line.config =  chartLine.NGConfig;
        $scope.items.push(_line);

    }]);