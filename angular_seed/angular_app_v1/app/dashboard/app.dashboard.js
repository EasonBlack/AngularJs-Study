import DashboardRouteConfig from './app.dashboard.route.js'
import DashboardController from './app.dashboard.ctrl.js'

angular.module('app.dashboard', ['ui.router'])
    .config(DashboardRouteConfig)
    .controller('DashboardController', DashboardController)
