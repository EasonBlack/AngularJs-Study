angular.module('app')
    .component('appSelect', {
        templateUrl: 'component/select/app.select.html',
        bindings: {
            val: '=',
            list: '<',
            editable: '<',
            title: '@',
            placeholder: '@',
            showcol: '@'
        }
    })