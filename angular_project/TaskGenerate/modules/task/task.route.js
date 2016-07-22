let TaskRouteConfig = ($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state('task', {
            url: "/task",
            views: {
                "": {
                    templateUrl: "/modules/task/task.view.html",
                    controller: 'TaskController',
                    controllerAs: 'vm'
                }
            }
        })
}

TaskRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default TaskRouteConfig;

