angular.module('app')
    .component('appBookEdit', {
        templateUrl: 'component/series/book.component.html',
        bindings: {
            newitem: '=',
            date: '<',
            dailyitemid: '<'
        },
        controller: ['$scope', 'modelService', 'ngDialog', function ($scope, modelService, ngDialog) {
            var ctrl = this;
            console.log(ctrl.newitem);
            ctrl.add = ()=> {
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
            }

            ctrl.update = ()=> {
                modelService.updateItem('Book', ctrl.newitem._id, ctrl.newitem)
                    .then((res)=> {
                        $scope.$emit('DailyReRender')
                    })
            }

            ctrl.delete = ()=> {
                modelService.deleteItem('Book', ctrl.newitem._id)
                    .then((res)=> {
                        $scope.$emit('DailyReRender')
                    })
            }
        }]
    })