angular.module('app')
    .component('appSeriesEdit', {
        templateUrl: 'component/series/series.component.html',
        bindings: {
            newseriesitem: '=',
            date: '<',
            dailyitemid: '<'
        },
        controller: ['seriesListService',function (seriesListService) {
            var ctrl = this;
            //ctrl.newseriesitem.date = ctrl.date;
            //ctrl.newseriesitem.ref = ctrl.dailyitemid;
            ctrl.seriesList = new seriesListService();
            ctrl.afterAddItem = function(){

            }
        }]
    })