import {view1Service} from  './view1.service';
import {View11Service} from './view1.provider';
import {view1Controller} from './view1.controller';

angular.module('view1Module', [])
    //.factory('view1Service', view1Service.view1Factory)
    .provider('view11Service', View11Service)
    .controller('view1Controller', view1Controller)