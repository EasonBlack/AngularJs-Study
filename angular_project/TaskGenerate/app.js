import  './layout/layout.module';
import  './modules/shared/shared.module.js';
import  './modules/task/task.module.js';


angular.module('app',
    [
        'layout.module',
        'shared.module',
        'task.module'
    ])
