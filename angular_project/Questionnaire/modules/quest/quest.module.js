import QuestController from './quest.controller.js'
import QuestRouteConfig from './quest.route.js'
import appQuestInput from './components/quest.input.component.js';

angular.module('quest.module', [
    'ui.router'
])
    .config(QuestRouteConfig)
    .controller('QuestController', QuestController)
    .component('appQuestInput', appQuestInput)