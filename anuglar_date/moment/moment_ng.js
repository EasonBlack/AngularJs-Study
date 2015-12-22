angular.module('app')
    .factory('moment', ['$window', function($window){
        var moment = $window.moment;
        delete( $window.moment );
        return moment;
}]);