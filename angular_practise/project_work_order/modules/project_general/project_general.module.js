import 'angular-ui-router';
import ProjectGeneralComponent from './project_general.component.js';
import ProjectGeneralRouteConfig from './project_general.route.js';

angular.module('app.projectgeneral', ['ui.router'])
    .config(ProjectGeneralRouteConfig)
    .component('projectGeneral', ProjectGeneralComponent);
