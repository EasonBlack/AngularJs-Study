import AppRouteConfig from './app.route.js'
import '../view1/view1.ouput';

angular.module('app', [
    'ui.router',
    'oc.lazyLoad',
    'view1.module'
])
    .config(AppRouteConfig);
