angular.module('app')
    .component('appContextCard', {
        templateUrl: '/component/context_card/context_card.template.html',
        bindings : {
            context: '<'
        }
    })