import TaskRouteConfig from './task.route.js'
import TaskController from './task.controller.js'

angular.module('task.module',[
    'ui.router'
])
.config(TaskRouteConfig)
.controller('TaskController', TaskController)