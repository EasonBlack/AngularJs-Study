//vendor
import 'angular';
import 'angular-ui-router';
import 'angular-sanitize'

//module
import "./modules/quest/quest.module.js"

angular.module('app', [
    'ui.router',
    'quest.module'
])
