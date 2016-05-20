angular.module('app')
    .component('appItEdit', {
        templateUrl: 'component/series/it.component.html',
        bindings: {
            val: '='
        },
        controller: ['listService',function (listService) {
            var ctrl = this;
            ctrl.itList = new listService('it');
            ctrl.addIt = ()=>{
                console.log(ctrl.newName);
                ctrl.itList.add({name: ctrl.newName});
            }
        }]
    })