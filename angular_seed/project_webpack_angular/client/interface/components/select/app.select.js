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
            templateUrl: 'interface/components/select/app.select.html',
            link: function(scope,ele,attr) {

            }
        }
    })