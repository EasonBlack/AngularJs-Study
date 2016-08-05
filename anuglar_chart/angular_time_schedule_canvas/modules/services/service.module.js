import FetchService from './fetch.service.js'
import ScheduleService from './schedule.service.js'

angular.module('app.service', [])
    .factory('FetchService', FetchService.factory)
    .factory('ScheduleService', ScheduleService.factory)