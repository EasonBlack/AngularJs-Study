import AppRouteConfig from './app.route.js'

angular.module('app', [
    'ui.router',
    'oc.lazyLoad',
    'view1.module'
])
    .config(AppRouteConfig);
