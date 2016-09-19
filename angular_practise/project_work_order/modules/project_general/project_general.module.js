import 'angular-ui-router';
import ProjectGeneralComponent from './project_general.component.js';
import ProjectGeneralRouteConfig from './project_general.route.js';
import CardListComponent from './card-list/card-list.component.js';
import CardComponent from './card/card.component.js';

angular.module('app.projectgeneral', ['ui.router'])
    .config(ProjectGeneralRouteConfig)
    .component('projectGeneral', ProjectGeneralComponent)
    .component('cardList', CardListComponent)
    .component('card', CardComponent);
