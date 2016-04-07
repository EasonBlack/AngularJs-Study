import angular from 'angular';

angular.module('app')
.directive('appInput',function(){
        return {
            restrict : 'E',
            scope : {
                val: '=',
                title: '='
            },
            templateUrl: 'interface/directive/input/app.input.html',
            link: function(scope,ele,attr) {
            }
        }
    })