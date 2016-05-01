import angular from 'angular'

angular.module('app')
    .controller('HomeController', ['$scope', '$location', '$routeParams', '$rootScope', function ($scope, $location, $routeParams, $rootScope) {
        var self = this;
        var rootNav = {title: 'All location', ids: '0'};
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
                {name: 'walking area', protection: '4', amount: '10', rate: '5'},
                {
                    name: 'Big Room', id: '3', subrow: [
                    {name: 'Small Room 1', protection: '8', amount: '10', rate: '5'},
                    {name: 'Small Room 1', protection: '3', amount: '10', rate: '5'}
                ]
                }
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

        self.ids = $routeParams.id.split('-');

        console.log(self.ids);
        if (self.ids.length == 1) {
            $scope.rows = source;
            $scope.navs = [rootNav];
        } else {
            var _tempRows = Object.assign([], source);
            var _ids = '0', navs=[rootNav];
            //navs.push(rootNav);
            for (var i = 1; i < self.ids.length; i++) {
                var _id = self.ids[i];
                _tempRows = _tempRows.filter(function (o) {
                    return o.id == _id
                })[0];
                _ids += '-' + _tempRows.id;
                navs.push({
                    title: _tempRows.name,
                    ids: _ids
                });
                _tempRows = _tempRows.subrow;
            }
            $scope.rows = _tempRows;
            $scope.navs = navs;
        }

        $scope.showSub = (row) => {
            console.log('show subs');
            row.showsub || (row.showsub = false)
            row.showsub = !row.showsub;
        }

        $scope.gotoSub = (event, row)=> {
            event.preventDefault();
            event.stopPropagation();
            self.ids.push(row.id);
            console.log(self.ids.join('-'));
            $location.path('/home/' + self.ids.join('-'));
        }
        $scope.goto = (ids)=> {
            $location.path('/home/' + ids);
        }
    }])