angular.module('app')
    .component('appFilmEdit', {
        templateUrl: 'component/series/film.component.html',
        bindings: {
            newitem: '=',
            date: '<',
            dailyitemid: '<'
        },
        controller: ['$scope', 'modelService', 'ngDialog', function ($scope, modelService, ngDialog) {
            var ctrl = this;

            ctrl.add = ()=> {
                if (!ctrl.dailyitemid) {
                    var dialogScope = $scope.$new();
                    dialogScope.title = 'You must bind a daily item!';
                    ngDialog.open({
                        template: 'component/message/message.html',
                        scope: dialogScope
                    });
                } else {
                    ctrl.newitem.ref = ctrl.dailyitemid;
                    modelService.addItem('Film', ctrl.newitem)
                        .then((res)=> {
                            $scope.$emit('DailyReRender')
                        })
                }
            }

            ctrl.update = ()=> {
                modelService.updateItem('Film', ctrl.newitem._id, ctrl.newitem)
                    .then((res)=> {
                        $scope.$emit('DailyReRender')
                    })
            }

            ctrl.delete = ()=> {
                modelService.deleteItem('Film', ctrl.newitem._id)
                    .then((res)=> {
                        $scope.$emit('DailyReRender')
                    })
            }
        }]
    })