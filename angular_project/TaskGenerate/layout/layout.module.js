import {appLeftNav} from './leftnav.component.js'
import {appView} from './view.component.js';

angular.module('layout.module', [
    'ui.router'
])
    .component('appLeftNav', appLeftNav)
    .component('appView', appView)
