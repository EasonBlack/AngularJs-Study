import angular from 'angular'

angular.module('app')
    .controller('HomeController', ['$scope', '$location', '$routeParams', '$rootScope', function ($scope, $location, $routeParams, $rootScope) {
        var self = this;
        $scope.headers = [
            {title: 'Task', id: 'task',width: '10%'},
            {title: 'Time', id: 'time',width: '20%'},
            {title: 'Asset', id: 'asset',width: '20%'},
            {title: 'Employee', id: 'employee',width: '20%'},
            {title: 'Status', id: 'status',width: '20%'}
        ]


        $scope.rows = [
            {
                task: 'Cleaning', id: '1', subrow: [
                {task: 'Clean the Operation Table',
                    time: [ {day: 'Web', time: '15:00~16:00'} ,{day: 'Sat', time: '16:00~18:00'} ],
                    asset: [ {name:"Operation Table" , employee: 'Joe', status: '1'}, {name:"Operation Table Small" , employee: 'Joe', status: '1'}]
                },
                {task: 'Clean the Owen',
                    time: [ {day: 'Web', time: '16:00~18:00'} ,{day: 'Sat', time: '15:00~16:00'} ],
                    asset: [ {name:"Microwave" , employee: 'Joe', status: '1'},{name:"Microwave Small" , employee: 'Joe', status: '1'}]
                },
                {task: 'Clean the Toaster',
                    time: [ {day: 'Daily', time: '15:00~16:00'} ],
                    asset: [ {name:"Toaster" , employee: 'Joe', status: '2'}]
                }
            ]
            },
            {
                task: 'Maintenance', id: '2', subrow: [
                {task: 'Maintenance the Operation Table',
                    time: [ {day: 'Web', time: '15:00~16:00'} ,{day: 'Sat', time: '16:00~18:00'} ],
                    asset: [ {name:"Operation Table" , employee: 'Joe', status: '1'}, {name:"Operation Table Small" , employee: 'Joe', status: '1'}]
                },
                {task: 'Maintenance the Owen',
                    time: [ {day: 'Web', time: '16:00~18:00'} ,{day: 'Sat', time: '15:00~16:00'} ],
                    asset: [ {name:"Microwave" , employee: 'Joe', status: '1'},{name:"Microwave Small" , employee: 'Joe', status: '1'}]
                },
                {task: 'Maintenance the Toaster',
                    time: [ {day: 'Daily', time: '15:00~16:00'} ],
                    asset: [ {name:"Toaster" , employee: 'Joe', status: '2'}]
                }
            ]
            },

            {
                task: 'Take Care', id: '3', subrow: []
            },
            {
                task: 'Take Care 2', id: '4', subrow: [
                {task: 'Maintenance the Operation Table',
                    time: [ {day: 'Web', time: '15:00~16:00'} ,{day: 'Sat', time: '16:00~18:00'} ],
                    asset: [ ]
                }
            ]
            }
        ]


        $scope.showSub = (row) => {
            row.showsub || (row.showsub = false)
            row.showsub = !row.showsub;
        }


    }])