angular.module('app')
    .component('appInfo', {
        templateUrl: 'interface/settings/settings.com.html',
        bindings: {},
        controller: ['$location', function ($location) {

            var ctrl = this;
            ctrl.goInfo = ()=>{
                $location.path('/info')
            }


        }]
    })