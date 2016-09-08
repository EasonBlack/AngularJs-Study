



let DatabaseRouteConfig = ($stateProvider) => {

    $stateProvider
        .state('database', {
            url: '/database',
            template: '<database-view></database-view>'
        })
}

DatabaseRouteConfig.$inject = ['$stateProvider'];

export default DatabaseRouteConfig;