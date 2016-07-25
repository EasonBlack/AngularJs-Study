import questTpl from './quest.view.html'


let QuestRouteConfig = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/quest");

    $stateProvider
        .state('quest', {
            url: '/quest',
            template: questTpl,
            controller: 'QuestController',
            controllerAs: 'vm'
        })
}

QuestRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default QuestRouteConfig;
