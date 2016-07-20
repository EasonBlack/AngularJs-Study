import 'angular';
import 'angular-ui-router';
import '../task/task.module.js';

angular.module('app', [
    'ui.router',
    'task.module'
]);
