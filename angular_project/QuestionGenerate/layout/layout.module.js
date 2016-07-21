import {appTopNav} from './topnav.component.js'
import {appView} from './view.component.js';

angular.module('layout.module', [
    'ui.router'
])
    .component('appTopNav', appTopNav)
    .component('appView', appView)
