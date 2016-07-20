import tpl from './task.view.html'

function taskRouteConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .otherwise("/task");

    $stateProvider
        .state('task', {
            url: "/task",
            views: {
                "": {
                    template: tpl,
                    controller: 'TaskCtrl',
                    controllerAs: 'vm'
                }
            }
        })
}

taskRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default taskRouteConfig;

