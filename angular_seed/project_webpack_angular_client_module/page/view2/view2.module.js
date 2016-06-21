import angular from 'angular';
import View2Ctrl from './view2.controller';
import View2Route from './view2.route';

angular.module('view2.module', ['ui.router'])
    .config(View2Route)
    .controller('View2Ctrl', View2Ctrl);