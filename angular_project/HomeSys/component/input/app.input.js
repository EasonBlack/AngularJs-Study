angular.module('app')
    .component('appInput', {
        templateUrl: 'component/input/app.input.html',
        bindings: {
            val: '=',
            type: '@',
            editable: '<',
            title: '@',
            placeholder: '@'
        }
    })
