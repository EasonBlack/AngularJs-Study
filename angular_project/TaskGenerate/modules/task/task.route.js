let TaskRouteConfig = ($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state('task', {
            url: '/task',
            templateUrl: "/modules/task/task.view.html",
            controller: 'TaskController',
            controllerAs: 'vm'
        })
        .state('task-add', {
            url: '/task/add',
            templateUrl: "/modules/task/add/task-add.view.html",
            controller: "TaskAddController",
            controllerAs: 'vm'
        })
}

TaskRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default TaskRouteConfig;

