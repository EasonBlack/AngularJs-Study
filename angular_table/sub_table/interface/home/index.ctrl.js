import angular from 'angular'

angular.module('app')
    .controller('HomeController', ['$scope', '$location', '$routeParams', '$rootScope', function ($scope, $location, $routeParams, $rootScope) {
        $scope.headers = [
            {title: 'NAME', id: 'name'},
            {title: 'PROTECTION', id: 'protection'},
            {title: 'AMOUNT', id: 'amount'},
            {title: 'COMPETITIOIN RATE', id: 'rate'}
        ]
        $scope.rows = [];

        var source = [
            {
                name: 'Buiding 1', id: '1', subrow: [
                {name: 'kitchen', protection: '8', amount: '10', rate: '5'},
                {name: 'kitchen-small', protection: '2', amount: '10', rate: '5'},
                {name: 'walking area', protection: '4', amount: '10', rate: '5'}
            ]
            },
            {
                name: 'Buiding 2', id: '2', subrow: [
                {name: 'Meeting Room A', protection: '8', amount: '10', rate: '5'},
                {name: 'Meeting Room B', protection: '12', amount: '10', rate: '5'},
                {name: 'Tollet A', protection: '3', amount: '4', rate: '5'}
            ]
            },
            {name: 'Tollet', protection: '6', amount: '10', rate: '6'},
        ]

        var id = $routeParams.id;
        if (id == '0') {
            $scope.rows = source;
        } else {
            $scope.rows = source.filter(function (o) {
                return o.id == id
            })[0].subrow;
        }

        $scope.showSub = (row) => {
            console.log('show subs');
            row.showsub || (row.showsub = false)
            row.showsub = !row.showsub;
        }

        $scope.gotoSub = (event, row)=> {
            event.preventDefault();
            event.stopPropagation();
            $location.path('/home/' + row.id);
        }
        $scope.goto = (id)=> {
            $location.path('/home/' + id);
        }
    }])