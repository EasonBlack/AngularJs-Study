
angular.module('app')
    .component('appBookEdit', {
        templateUrl: 'component/series/book.component.html',
        bindings: {
            newitem: '=',
            date: '<',
            dailyitemid: '<'
        },
        controller: ['seriesListService','seriesItemService',function (seriesListService, seriesItemService) {
            var ctrl = this;
        }]
    })