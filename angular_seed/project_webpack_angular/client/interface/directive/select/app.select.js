import angular from 'angular';

angular.module('app')
    .directive('appSelect',function(){
        return {
            restrict : 'E',
            scope : {
                val: '=',
                title: '=',
                items: '='
            },
            templateUrl: 'interface/directive/select/app.select.html',
            link: function(scope,ele,attr) {

            }
        }
    })