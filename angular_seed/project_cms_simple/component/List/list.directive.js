angular.module('app')
    .directive('myTable', function ($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'component/List/list.directive.html',
            scope: {
                list: '=',
                getPageData: '&'
            },
            link: function (scope, ele, attr) {
                var self= this;
                self.defaultPageSize = 5;

                scope.pageSkip = function (page) {
                    var params = {
                        offset: (page - 1) * self.defaultPageSize,
                        limit : self.defaultPageSize
                    }
                    scope.getPageData({params:params});
                }
            }
        }
    });