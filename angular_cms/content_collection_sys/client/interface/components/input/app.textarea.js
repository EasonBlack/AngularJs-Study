import angular from 'angular';

angular.module('app')
    .directive('appTextArea',function(){
        return {
            restrict : 'E',
            scope : {
                val: '=',
                title: '='
            },
            templateUrl: 'interface/components/input/app.textarea.html',
            link: function(scope,ele,attr) {
            }
        }
    })