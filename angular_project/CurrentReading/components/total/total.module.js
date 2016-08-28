angular.module('app.total', ['ui.router'])
    .config(($stateProvider, $urlRouterProvider)=> {
        $stateProvider
            .state('total', {
                url: '/total',
                template: '<div>This is total</div>'
            })
    })