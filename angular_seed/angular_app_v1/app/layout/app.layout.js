import appMenu from './menu.component/menu.component.js'
import growlConfig from './notification/growl.config.js';
import AppDefaultRouteConfig from './app.route.default.js';

angular.module('app.layout', [
    'ui.router',
    'angular-growl'])
    .config(growlConfig)
    .config(AppDefaultRouteConfig)
    .component('appMenu', appMenu)
