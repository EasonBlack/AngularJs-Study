import 'angular-ui-router';
import ProjectDetailRouteConfig from  './project_detail.route.js'
import ProjectDetailComponent from './project_detail.component.js';
import LeftNavComponent from './left_nav/left_nav.component.js';
import FeedsComponent from './feeds/feeds.component.js';
import LocationListComponent from './location_list/location_list.component';
import AreaListComponent from './location_list/area_list/area_list.component'
import AreaDetailComponent from './location_list/area_detail/area_detail.component'
import SubAreaListComponent from './location_list/subarea_list/subarea_list.component'


angular.module('app.projectdetail', ['ui.router'])
    .config(ProjectDetailRouteConfig)
    .component('projectDetail', ProjectDetailComponent)
    .component('leftNav', LeftNavComponent)
    .component('feeds', FeedsComponent)
    .component('locationList', LocationListComponent)
    .component('areaList', AreaListComponent)
    .component('areaDetail', AreaDetailComponent)
    .component('subAreaList', SubAreaListComponent)

