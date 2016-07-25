import QuestController from './quest.controller.js'
import QuestRouteConfig from './quest.route.js'

angular.module('quest.module', [
    'ui.router'
])
    .config(QuestRouteConfig)
    .controller('QuestController', QuestController)