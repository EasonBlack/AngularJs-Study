import $ from 'jquery'
import angular from 'angular'
import uuid from 'node-uuid';

import 'angular-sanitize'

angular.module('app',['ngSanitize'])
    .controller('MainController',['$scope','$sce',function($scope,$sce){
        $scope.items = [];
        $scope.add =  ()=> {
            var url= $scope.newUrl;
            // https://www.youtube.com/watch?v=RKqRj3VgR_c
            var key = url.split('v=')[1];
            $scope.items.push({id: uuid.v1(), value: key });
            console.log($scope.items);
        }
        $scope.getIframeSrc =(item)=>{
            var src = 'https://www.youtube.com/embed/' + item.value;
            return $sce.trustAsResourceUrl(src);
        }
    }])


