import CurrentService from './current.service';
import ServiceConst from './service.constant';

angular.module('app.service', [])
    .constant('ServiceConst', ServiceConst)
    .factory('CurrentService', CurrentService.factory);
