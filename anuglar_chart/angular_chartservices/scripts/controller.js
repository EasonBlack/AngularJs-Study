angular.module('app')
    .controller('appCtrl', ['$scope', '$http', 'chartLine', 'chartBar', 'chartArea','chartPie','chartCombine',function ($scope, $http, chartLine, chartBar,chartArea,chartPie,chartCombine) {

        var self = this;

        $scope.items = [];
        $scope.dataType = [
            {id:1, name:'line'},
            {id:2, name:'bar' },
            {id:3, name:'area' },
            {id:4, name:'pie' },
            {id:5, name:'combine' }
        ];

        self.dataSet = {
            'xxx': {
                type: 'line',
                categories: ['2001', '2002', '2003', '2004', '2005'],
                data: [10, 15, 12, 8, 7],
                name: 'xxxxx',
                title: 'AAAAA'
            },
            'piedata': {
                type: 'line',
                data: [{
                    name: "a",
                    y: 10
                }, {
                    name: "b",
                    y: 12
                }, {
                    name: "c",
                    y: 7
                }, {
                    name: "d",
                    y: 9
                }, {
                    name: "e",
                    y: 4
                }],
                name: 'xxxxx',
                title: 'AAAAA'
            },
            'combinedata' : {
                categories: ['2001', '2002', '2003', '2004', '2005'],
                name: 'xxxxx',
                title: 'AAAAA',
                data :  [
                    {
                        type: 'column',
                        name: 'a',
                        data: [3, 2, 1, 3, 4]
                    }, {
                        type: 'column',
                        name: 'b',
                        data: [2, 3, 5, 7, 6]
                    }, {
                        type: 'column',
                        name: 'c',
                        data: [4, 3, 3, 9, 0]
                    }, {
                        type: 'spline',
                        name: 'd',
                        data: [3, 2.67, 3, 6.33, 3.33],
                        marker: {
                            lineWidth: 2,
                            lineColor: Highcharts.getOptions().colors[3],
                            fillColor: 'white'
                        }
                    }
                ]
            }
        }


        self.chartSet = {
            'line' : function(item, index) {
                var _data =  self.dataSet['xxx'];
                var _chartline = new chartLine(_data);
                $scope.items[index].config = _chartline.config
            },
            'bar': function(item, index){
                var _data =  self.dataSet['xxx'];
                var _chartBar = new chartBar(_data);
                $scope.items[index].config = _chartBar.config
            },
            'area': function(item, index){
                var _data =  self.dataSet['xxx'];
                var _chartArea = new chartArea(_data);
                $scope.items[index].config = _chartArea.config
            },
            'pie': function(item, index){
                var _data =  self.dataSet['piedata'];
                var _chartPie = new chartPie(_data);
                $scope.items[index].config = _chartPie.config
            },
            'combine': function(item, index){
                var _data =  self.dataSet['combinedata'];
                var _chartCombine = new chartCombine(_data);
                $scope.items[index].config = _chartCombine.config
            }
        }


        $scope.add = function(){
            $scope.items.push({})
        }

        $scope.setChart = function(item, index){
            self.chartSet[item.typeName](item, index);
        }


    }]);