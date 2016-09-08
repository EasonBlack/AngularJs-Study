import 'angular-ui-router';
import ProjectDetailRouteConfig from  './project_detail.route.js'
import ProjectDetailComponent from './project_detail.component.js';
import LeftNavComponent from './left_nav/left_nav.component.js';
import FeedsComponent from './feeds/feeds.component.js';

angular.module('app.projectdetail', ['ui.router'])
    .config(ProjectDetailRouteConfig)
    .component('projectDetail', ProjectDetailComponent)
    .component('leftNav', LeftNavComponent)
    .component('feeds', FeedsComponent)

