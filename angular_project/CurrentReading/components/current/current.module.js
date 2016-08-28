import CurrentComponent from './current.component';


angular.module('app.current', ['ui.router', 'app.service'])
    .config(($stateProvider, $urlRouterProvider)=> {
        $stateProvider
            .state('current', {
                url: '/current',
                template: '<current></current>'
            })
    })
    .component('current', CurrentComponent)
   