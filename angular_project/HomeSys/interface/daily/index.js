import moment from 'moment';
angular.module('app')
    .controller('dailyCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.eventSources = [];
        $scope.uiConfig = {
            calendar: {
                height: 450,
                editable: true,
                header: {
                    left: 'month basicWeek basicDay agendaWeek agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                dayClick: function (date, jsEvent, view) {
                    $scope.alertEventOnClick(date, jsEvent, view)
                },
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize,
                events: [
                ]
            }
        };
        $scope.alertEventOnClick = (date, jsEvent, view)=> {
            var _date = moment(date).format('YYYY-MM-DD');
            $location.path('/daily/detail/' + _date);
        }
    }])