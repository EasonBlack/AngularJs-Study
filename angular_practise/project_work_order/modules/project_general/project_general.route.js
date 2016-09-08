



let ProjectGeneralRouteConfig = ($stateProvider) => {

    $stateProvider
        .state('project', {
            url: '/project',
            template: '<project-general></project-general>'
        })
}

ProjectGeneralRouteConfig.$inject = ['$stateProvider'];

export default ProjectGeneralRouteConfig;