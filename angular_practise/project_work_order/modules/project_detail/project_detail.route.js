
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
}

ProjectDetailRouteConfig.$inject = ['$stateProvider'];

export default ProjectDetailRouteConfig;