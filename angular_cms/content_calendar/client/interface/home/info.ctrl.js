import angular from 'angular';

angular.module('app')
    .controller('infoCtrl', ['$scope', function ($scope) {
        $scope.eventSources = [];
        $scope.uiConfig = {
            calendar: {
                height:600,
                width: 'auto',
                editable: true,
                header: {
                    left: 'month basicWeek basicDay agendaWeek agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                dayClick: $scope.alertEventOnClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize,
                events: [
                    {
                        title: 'All Day Event',
                        start: '2016-04-01'
                    },
                    {
                        title: 'Long Event',
                        start: '2016-04-07',
                        end: '2016-04-10'
                    },
                ]
            }
        };
    }])