



let DatabaseRouteConfig = ($stateProvider) => {

    $stateProvider
        .state('database', {
            url: '/database',
            template: '<database></database>'
        })
}

DatabaseRouteConfig.$inject = ['$stateProvider'];

export default DatabaseRouteConfig;