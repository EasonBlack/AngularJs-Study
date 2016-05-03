import $ from 'jquery'
import angular from 'angular'

import 'angular-sanitize'
import 'ng-file-upload'

angular.module('app',['ngSanitize','ngFileUpload'])
    .controller('MainController',['$scope',function($scope){
        $scope.deleteFile = ()=> {
            $scope.file = null;
        }
    }])


