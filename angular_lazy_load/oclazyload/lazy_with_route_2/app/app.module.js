import AppRouteConfig from './app.route.js'

angular.module('app', [
    'ui.router',
    'oc.lazyLoad',
])
    .config(AppRouteConfig);
