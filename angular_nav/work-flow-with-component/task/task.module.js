import TaskCtrl from './task.controller.js';
import taskRouteConfig from './task.route';
import {taskStepOne} from './components/task.step1.components.js'
import {taskStepTwo} from './components/task.step2.components.js'
import {taskStepThree} from './components/task.step3.components.js'

angular.module('task.module', [])
    .config(taskRouteConfig)
    .controller('TaskCtrl', TaskCtrl)
    .component('taskStepOne', taskStepOne)
    .component('taskStepTwo', taskStepTwo)
    .component('taskStepThree', taskStepThree)