function categoryRouteConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('category', {
            url: "/category",
            views: {
                "": {
                    templateUrl: "/module/category/category.view.html",
                    controller: 'CategoryController',
                    controllerAs: 'vm'
                }
            }
        })
}

categoryRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default categoryRouteConfig;

