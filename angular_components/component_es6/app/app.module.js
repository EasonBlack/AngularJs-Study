import {AppController} from './app.controller.js';
import {appComponent} from './app.component.js';

angular.module('app', [])
    .controller('AppController', AppController)
    .component('appComponent', appComponent)

