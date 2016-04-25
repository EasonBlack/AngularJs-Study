import angular from 'angular';

angular.module('app')
    .component('appInput', {
        templateUrl: '/components/input/app.input.html',
        bindings: {
            val: '=',
            title: '<'
        }
    });
