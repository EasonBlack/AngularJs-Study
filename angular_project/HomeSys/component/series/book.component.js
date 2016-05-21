angular.module('app')
    .component('appBookEdit', {
        templateUrl: 'component/series/book.component.html',
        bindings: {
            newitem: '=',
            date: '<',
            dailyitemid: '<'
        },
        controller: ['$scope', 'modelService', function ($scope, modelService) {
            var ctrl = this;
            ctrl.addItem = ()=> {
                if (!ctrl.dailyitemid) {
                    var dialogScope = $scope.$new();
                    dialogScope.title = 'You must bind a daily item!';
                    ngDialog.open({
                        template: 'component/message/message.html',
                        scope: dialogScope
                    });
                } else {
                    modelService.addItem('Book', ctrl.newitem)
                        .then((res)=> {
                            $scope.$emit('DailyReRender')
                        })
                }
                //ctrl.newitem.addItem(ctrl.newitem);
            }
        }]
    })