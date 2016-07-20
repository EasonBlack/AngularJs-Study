import TaskCtrl from './task.controller.js';
import taskRouteConfig from './task.route';
import TaskStep1Ctrl from './components/task.step1.controller.js';

angular.module('task.module', [])
    .config(taskRouteConfig)
    .controller('TaskCtrl', TaskCtrl)
    .controller('TaskStep1Ctrl', TaskStep1Ctrl)
