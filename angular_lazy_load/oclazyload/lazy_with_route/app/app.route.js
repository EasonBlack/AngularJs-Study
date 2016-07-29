

let AppRouteConfig = ($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state('view1', {
            url: '/view1',
            templateUrl: "/view1/view1.template.html",
            controller: 'View1Controller',
            controllerAs: 'vm',
            resolve: {
                lazyLoad: function($ocLazyLoad) {
                    return $ocLazyLoad.load('../view1/view1.controller.js');
                }
            }
        })
}

AppRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default AppRouteConfig;

