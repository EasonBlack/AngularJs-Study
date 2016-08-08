import dashboardTpl from './app.dashboard.tpl.html'

let DashboardRouteConfig = ($stateProvider) => {
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            template: dashboardTpl,
            controller: 'DashboardController',
            controllerAs: 'vm'
        })
}

DashboardRouteConfig.$inject = ['$stateProvider'];

export default DashboardRouteConfig;