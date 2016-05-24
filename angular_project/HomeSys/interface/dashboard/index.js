import moment from 'moment';

angular.module('app')
    .controller('dashboardCtrl', ['$scope', '$http', function ($scope, $http) {
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
                $scope.dailyTotalItems = [];
                for(var o in dataType) {
                    $scope.dailyTotalItems.push(
                        {
                            name: o,
                            time: dataType[o].time,
                            trophy: dataType[o].trophy
                        }
                    )
                }

            })

    }])