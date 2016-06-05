import moment from 'moment';

angular.module('app')
    .controller('dashboardCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.control = {
            dailyTotalItemsChart: false,
            selectType: ''
        }

        $scope.dashboard = {
            daily: {}
        };

        var dateend = new moment().format('YYYY-MM-DD');
        var datestart = moment(dateend).subtract(7, 'days').format('YYYY-MM-DD');
        //top 7
        $http.get('http://localhost:2003/daily-items-total?datestart=' + datestart + '&dateend=' + dateend)
            .then((res)=> {
                var dataType = [];
                var _tempArray = [];
                //$scope.dashboard = res.data;
                res.data.forEach((item)=> {
                    if (_tempArray.indexOf(item.type) == -1) {
                        _tempArray.push(item.type);
                        dataType[item.type] = {
                            time: parseFloat(item.time || 0),
                            trophy: parseInt(item.trophy || 0)
                        }
                    } else {
                        dataType[item.type].time = parseFloat(dataType[item.type].time) + parseFloat(item.time || 0);
                        dataType[item.type].trophy = parseFloat(dataType[item.type].trophy) + parseFloat(item.trophy || 0);
                    }
                });
                $scope.dailyTotalItems = {};
                $scope.dailyTotalItems.startdate = datestart;
                $scope.dailyTotalItems.enddate = dateend;
                $scope.dailyTotalItems.data = [];
                var chartCatagory = [];
                var chartDataTime = [];
                var chartDataTrophy = [];
                for (var o in dataType) {
                    chartCatagory.push(o);
                    chartDataTime.push(dataType[o].time);
                    chartDataTrophy.push(dataType[o].trophy);
                    $scope.dailyTotalItems.data.push(
                        {
                            name: o,
                            time: dataType[o].time,
                            trophy: dataType[o].trophy
                        }
                    )
                }

                $scope.dailyTotalItemsChart = {
                    options: {
                        chart: {
                            type: 'bar'
                        },
                        credits: {
                            enabled: false
                        }
                    },
                    xAxis: {
                        categories: chartCatagory
                    },
                    series: [{
                        name: 'Time',
                        data: chartDataTime
                    }, {
                        name: 'Trophy',
                        data: chartDataTrophy
                    }],
                    title: {
                        text: 'Total'
                    },
                    size: {
                        width: 280,
                        height: 280
                    },
                    loading: false
                }


            })

        $http.get('http://localhost:2003/daily-total?datestart=' + datestart + '&dateend=' + dateend)
            .then((res)=> {
                $scope.dashboard.daily = res.data;
            })

        //type chart
        $scope.$watch('control.selectType', function (nv) {
            if (nv) {
                let chartCategory = [];
                let chartDataArray = [];
                $scope.dashboard.daily.forEach((d)=> {
                    chartCategory.push(d.date);
                    if (!d.items) {
                        chartDataArray.push(0);
                        return;
                    }
                    var typeItems = d.items.filter((t)=> {
                        return t.type == nv;
                    })
                    if (!typeItems.length) {
                        chartDataArray.push(0);
                    } else {
                        var _sum = 0;
                        typeItems.forEach((t)=> {
                            _sum += parseFloat(t.time || 0);
                        })
                        chartDataArray.push(_sum);
                    }

                })
                console.log(chartDataArray);
                $scope.typeChartConfig = {
                    options: {
                        chart: {
                            type: 'column'
                        },
                        credits: {
                            enabled: false
                        }
                    },
                    xAxis: {
                        categories: chartCategory
                    },
                    series: [{
                        name: 'Time',
                        data: chartDataArray
                    }],
                    title: {
                        text: ''
                    },
                    size: {
                        height: 280
                    },
                    loading: false
                }
            }
        })

    }])