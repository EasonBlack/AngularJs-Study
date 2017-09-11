angular.module('app')
  .directive('simple3Dom', function(){
    return {
      restrict: 'E',
      scope: {
        info3: '=info3'
      },
      templateUrl: 'simple3.directive.html',
    }
  })