angular.module('app')
    .component('appTable', {
        templateUrl: 'component/table/app.table.html',
        bindings: {
            list: '<'
        }
    })