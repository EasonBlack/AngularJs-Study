import angular from 'angular';

angular.module('app')
    .directive('appKey',function(){
        return {
            restrict : 'E',
            scope : {
                val: '=',
                title: '='
            },
            templateUrl: 'interface/components/input/app.key.html',
            link: function(scope,ele,attr) {
                scope.addTag = () => {
                    scope.val = scope.val || [];
                    if(scope.val.indexOf(scope.newTag)==-1 && scope.newTag) {
                        scope.val.push(scope.newTag);
                        scope.newTag = '';
                    }
                }
            }
        }
    })