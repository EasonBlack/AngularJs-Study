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

                scope.delete=(tag)=> {
                    var len = scope.val.length;
                    for(var i=len-1;i>=0;i--) {
                        if(scope.val[i] == tag) {
                            scope.val.splice(i, 1);
                        }
                    }
                }
            }
        }
    })