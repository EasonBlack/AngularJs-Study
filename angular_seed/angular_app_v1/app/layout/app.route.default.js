

let AppDefaultRouteConfig = ($urlRouterProvider) => {
    $urlRouterProvider.otherwise("/dashboard");
}

AppDefaultRouteConfig.$inject = ['$urlRouterProvider'];

export default AppDefaultRouteConfig;