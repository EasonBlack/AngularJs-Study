import angular from 'angular';

angular.module('app')
    .directive('appSelectkey', function () {
        return {
            restrict: 'E',
            scope: {
                val: '=',
                title: '=',
                items: '='
            },
            templateUrl: 'interface/components/select/app.selectkey.html',
            link: function (scope, ele, attr) {

                scope.addTag = () => {
                    var flag = false;
                    scope.val = scope.val || [];
                    for(var i =0;i<scope.val.length;i++) {
                        if (scope.val[i].id == scope.current.id) {
                            flag = true;
                            break;
                        }
                    }
                    if(!flag) {
                        scope.val.push(scope.current);
                    }
                }

                scope.delete = (tag)=> {
                    var len = scope.val.length;
                    for (var i = len - 1; i >= 0; i--) {
                        if (scope.val[i].id == tag.id) {
                            scope.val.splice(i, 1);
                        }
                    }
                }

            }
        }
    })