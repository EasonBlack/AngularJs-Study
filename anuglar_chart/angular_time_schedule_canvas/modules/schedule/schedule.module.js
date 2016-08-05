import '../services/service.module.js'

import ScheduleRouteConfig from './schedule.route.js';
import ScheduleController from './schedule.controller.js'
import TimeScheduleCanvas from './components/time-schedule/time-schedule.directive.js'

angular.module('app.schedule', [
    'ui.router',
    'app.service'
])
    .config(ScheduleRouteConfig)
    .controller('ScheduleController', ScheduleController)
    .directive('timeScheduleCanvas', TimeScheduleCanvas);