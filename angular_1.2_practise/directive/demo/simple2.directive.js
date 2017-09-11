angular.module('app')
.directive('simpleDom', function(){
  return {
    restrict: 'E',
    scope: {
      info: '=info'
    },
    template: '<div>{{info}}</div>'
  }
})