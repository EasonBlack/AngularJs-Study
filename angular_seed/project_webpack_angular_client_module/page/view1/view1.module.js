import angular from 'angular';
import View1Ctrl from './view1.controller';
import View1Route from './view1.route';

angular.module('view1.module', ['ui.router'])
    .config(View1Route)
    .controller('View1Ctrl', View1Ctrl)