import TaskRouteConfig from './task.route.js'
import TaskController from './task.controller.js'
import TaskAddController from './add/task-add.controller.js'
import TaskListConst from './task.constant.js'
import FetchService from '../services/fetch.service.js'

console.log(TaskListConst);
angular.module('task.module', [
    'ui.router'
])
    .config(TaskRouteConfig)
    .constant('TaskListConst', TaskListConst)
    .controller('TaskController', TaskController)
    .controller('TaskAddController', TaskAddController)
    .factory('FetchService', FetchService.factory)