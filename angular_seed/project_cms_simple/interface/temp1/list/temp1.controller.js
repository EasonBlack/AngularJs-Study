angular.module('app')
    .controller('Temp1Controller', ['$scope', 'lodash', '$q', 'temp1Service', function ($scope, _, $q, $Service) {

        var self = this;
        self.Headers = [
            {name: 'id',title : 'ID'},
            {name: 'title',title : 'TITLE'},
            {name: 'startTime',title : 'STARTTIME'},
            {name: 'endTime',title : 'ENDTIME'}
        ];

        $scope.getPageData = function (params) {
            $Service.getAll(params).then(function (result) {
                $scope.list = {
                    Headers: self.Headers,
                    Data: result.data,
                    total: result.total,
                    pagesize: result.pagesize
                }
            });
        }

        $scope.AddItem = function() {
            window.location.href = '#/temp1/edit';
        }

        self.init = function(){
            $scope.getPageData();
        }

        self.init();


    }])