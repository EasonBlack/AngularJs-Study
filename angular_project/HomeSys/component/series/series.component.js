angular.module('app')
    .component('appSeriesEdit', {
        templateUrl: 'component/series/series.component.html',
        bindings: {
            newseriesitem: '=',
            selectedseries: '<',
            date: '<',
            dailyitemid: '<'
        },
        controller: ['seriesListService','seriesItemService',function (seriesListService, seriesItemService) {
            var ctrl = this;
            ctrl.seriesList = new seriesListService();
        }]
    })