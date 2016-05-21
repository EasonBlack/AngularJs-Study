angular.module('app')
    .component('appFilmEdit', {
        templateUrl: 'component/series/film.component.html',
        bindings: {
            newitem: '=',
            date: '<',
            dailyitemid: '<'
        },
        controller: ['$scope', 'filmService', 'modelService', function ($scope, filmService, modelService) {
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
        }]
    })