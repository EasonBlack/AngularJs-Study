import scheduleTpl from './schedule.view.html'



let ScheduleRouteConfig = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("schedule");

    $stateProvider
        .state('schedule', {
            url: '/schedule',
            //template: scheduleTpl,
            templateUrl: '/modules/schedule/schedule.view.html',
            controller: 'ScheduleController',
            controllerAs: 'vm'
        })

}

ScheduleRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default ScheduleRouteConfig;
