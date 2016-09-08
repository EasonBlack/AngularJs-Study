import 'angular-ui-router';
import DatabaseRouteConfig from './database.route.js'
import DatabaseComponent from './database.component.js';

angular.module('app.database', ['ui.router'])
    .config(DatabaseRouteConfig)
    .component('databaseView', DatabaseComponent)
