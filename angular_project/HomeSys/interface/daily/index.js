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
                    {
                        title: 'All Day Event',
                        start: '2016-05-01'
                    },
                    {
                        title: 'Long Event',
                        start: '2016-04-07',
                        end: '2016-05-10'
                    },
                ]
            }
        };
        $scope.alertEventOnClick = (date, jsEvent, view)=> {
            var _date = moment(date).format('YYYY-MM-DD');
            $location.path('/daily/detail/' + _date);
        }
    }])