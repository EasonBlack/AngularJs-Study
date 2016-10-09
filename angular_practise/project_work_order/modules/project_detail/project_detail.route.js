
let ProjectDetailRouteConfig = ($stateProvider) => {

    $stateProvider
        .state('project-detail', {
            url: '/project/:id',
            template: '<project-detail></project-detail>'
        })
        .state('project-detail.feed', {
            url: '/feed',
            template: '<feeds></feeds>'
        })
        .state('project-detail.workorder', {
            url: '/workorder',
            template: '<div>This is work order</div>'
        })
        .state('project-detail.location_list', {
            url: '/location_list',
            template: '<location-list></location-list>'
        })
}

ProjectDetailRouteConfig.$inject = ['$stateProvider'];

export default ProjectDetailRouteConfig;