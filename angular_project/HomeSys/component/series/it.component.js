angular.module('app')
    .component('appItEdit', {
        templateUrl: 'component/series/it.component.html',
        bindings: {
            val: '='
        },
        controller: ['itService',function (itService) {
            var ctrl = this;
            ctrl.itList = new itService();
        }]
    })