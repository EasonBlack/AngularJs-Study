import angular from 'angular';
import './list.service.js';

angular.module('app')
    .controller('listCtrl',['$scope','listService',function($scope, $Service){
        var self = this;
        self.Headers = [
            {name: 'id',title : 'ID'},
            {name: 'name',title : 'NAME'}
        ];

        $scope.getPageData = function (params) {
            $Service.getAll(params).then(function (result) {
                console.log(result);
                $scope.list = {
                    Headers: self.Headers,
                    Data: result.data,
                    total: result.total,
                    pagesize: result.pagesize
                }
            });
        }

        self.init = function(){
            $scope.getPageData();
        }

        self.init();

    }])