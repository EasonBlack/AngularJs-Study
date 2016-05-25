import moment from 'moment';

angular.module('app')
    .controller('dashboardCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.control = {
           dailyTotalItemsChart:false
        }

        //top 7
        var dateend = new moment().format('YYYY-MM-DD');
        var datestart = moment(dateend).subtract(7, 'days').format('YYYY-MM-DD');
        $http.get('http://localhost:2003/daily-items-total?datestart=' + datestart + '&dateend=' + dateend)
            .then((res)=> {
                var dataType = [];
                var _tempArray = [];
                res.data.forEach((item)=>{
                   if(_tempArray.indexOf(item.type) == -1){
                       _tempArray.push(item.type);
                       dataType[item.type] = {
                           time: parseFloat(item.time || 0),
                           trophy: parseInt(item.trophy || 0)
                       }
                   } else {
                       dataType[item.type].time =  parseFloat(dataType[item.type].time) + parseFloat(item.time || 0);
                       dataType[item.type].trophy =  parseFloat(dataType[item.type].trophy) + parseFloat(item.trophy || 0);
                   }
                });
                $scope.dailyTotalItems = {};
                $scope.dailyTotalItems.startdate = datestart;
                $scope.dailyTotalItems.enddate = dateend;
                $scope.dailyTotalItems.data = [];
                var chartCatagory = [];
                var chartDataTime = [];
                var chartDataTrophy = [];
                for(var o in dataType) {
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
                        name : 'Time',
                        data: chartDataTime
                    },{
                        name : 'Trophy',
                        data: chartDataTrophy
                    }],
                    title: {
                        text: 'Total'
                    },
                    size: {
                        width: 280,
                        height:280
                    },
                    loading: false
                }


            })

    }])