import {AppService} from './app.service.js';
import {AppController} from './app.controller.js';

angular.module('app', [])
    .factory('AppService', AppService.factory)
    .controller('AppController', AppController)
