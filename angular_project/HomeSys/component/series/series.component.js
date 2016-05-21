angular.module('app')
    .component('appSeriesEdit', {
        templateUrl: 'component/series/series.component.html',
        bindings: {
            newseriesitem: '=',
            selectedseries: '<',
            date: '<',
            dailyitemid: '<'
        },
        controller: ['$scope', 'seriesListService', 'seriesItemService', 'ngDialog', function ($scope, seriesListService, seriesItemService, ngDialog) {
            var ctrl = this;
            ctrl.seriesList = new seriesListService();
            ctrl.addItem = ()=> {
                if(!ctrl.dailyitemid) {
                    var dialogScope = $scope.$new();
                    dialogScope.title = 'You must bind a daily item!';
                    ngDialog.open({
                        template: 'component/message/message.html',
                        scope: dialogScope
                    });
                } else {
                    ctrl.seriesList.addItem(ctrl.newseriesitem.seriesid, ctrl.newseriesitem,function(){
                        $scope.$emit('DailyReRender')
                    });

                }


            }
        }]
    })