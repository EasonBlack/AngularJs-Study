import 'angular-ui-router';
import DatabaseRouteConfig from './database.route.js'
import DatabaseComponent from './database.component.js';

angular.module('database.module', ['ui.router'])
    .config(DatabaseRouteConfig)
    .component('databaseComponent', DatabaseComponent)
