let View1RouteConfig = ($stateProvider) => {

    $stateProvider
        .state('view1.detail', {
            url: '/view1/detail',
            template: '<div>This is Detail</div>'
        })
        .state('view1.help', {
            url: '/view1/help',
            template: '<view1-help></view1-help>'
        })
}

View1RouteConfig.$inject = ['$stateProvider'];

export default View1RouteConfig;