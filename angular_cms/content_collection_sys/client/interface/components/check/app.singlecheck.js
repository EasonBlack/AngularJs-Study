import angular from 'angular';

angular.module('app')
    .directive('appSingleCheck',function(){
        return {
            restrict : 'E',
            scope : {
                val: '=',
                title: '='
            },
            templateUrl: 'interface/components/check/app.singlecheck.html',
            link: function(scope,ele,attr) {
            }
        }
    })