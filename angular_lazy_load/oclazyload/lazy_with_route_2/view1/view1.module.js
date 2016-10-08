import {View1Controller} from './view1.controller.js'
import View1RouteConfig from  './view1.route.js'
import View1HelpComponent from './view1_help/view1_help.component'

angular.module('view1.module', [])
    .config(View1RouteConfig)
    .controller('View1Controller', View1Controller)
    .component('view1Help', View1HelpComponent)
