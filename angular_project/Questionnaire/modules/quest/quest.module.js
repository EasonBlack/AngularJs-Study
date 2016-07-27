import QuestController from './test-page/quest.controller.js'
import QuestListController from './list-page/quest.list.controller.js'
import QuestConst from './quest.constant.js'
import QuestRouteConfig from './quest.route.js'
import appQuestInput from './components/quest.input.component.js';

angular.module('quest.module', [
    'ui.router'
])
    .config(QuestRouteConfig)
    .constant('QuestConst', QuestConst)
    .controller('QuestController', QuestController)
    .controller('QuestListController', QuestListController)
    .component('appQuestInput', appQuestInput)