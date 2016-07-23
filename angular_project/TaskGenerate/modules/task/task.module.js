import TaskRouteConfig from './task.route.js'
import TaskController from './task.controller.js'
import TaskListConst from './task.constant.js'
import FetchService from '../services/fetch.service.js'

console.log(TaskListConst);
angular.module('task.module', [
    'ui.router'
])
    .config(TaskRouteConfig)
    .constant('TaskListConst', TaskListConst)
    .controller('TaskController', TaskController)
    .factory('FetchService', FetchService.factory)