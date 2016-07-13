import $ from 'jquery'
import angular from 'angular'
import uuid from 'node-uuid';

import 'angular-sanitize'

angular.module('app',['ngSanitize'])
    .controller('MainController',['$scope','$sce',function($scope,$sce){
        $scope.items = [];
        $scope.add =  ()=> {
            var url= $scope.newUrl;
            if(url.indexOf('youku')==-1) {
                return false;
            }
            // http://v.youku.com/v_show/id_XMTY0MDgxMjMxMg==.html
            var key = url.split('/').pop().split('id_')[1].split('.')[0];
            $scope.items.push({id: uuid.v1(), value: key });
            console.log($scope.items);
        }
        $scope.getIframeSrc =(item)=>{
            var src = 'http://player.youku.com/embed/' + item.value;
            return $sce.trustAsResourceUrl(src);
        }
    }])


