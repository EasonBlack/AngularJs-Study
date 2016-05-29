import moment from 'moment'

angular.module('app')
    .controller('infoCtrl', ['$scope', function ($scope) {
        var init = ()=>{
            var start = moment($scope.config.start_date);
            var end = moment();
            $scope.last = end.diff(start, 'days');
        }
        init();
    }]);