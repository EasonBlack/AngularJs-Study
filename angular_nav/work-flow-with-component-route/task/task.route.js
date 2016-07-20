import tpl from './task.view.html'
import tpl1 from './components/task.step1.components.tpl.html'
import tpl2 from './components/task.step2.components.tpl.html'
import tpl3 from './components/task.step3.components.tpl.html'

function taskRouteConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .otherwise("/task/step1");

    $stateProvider
        .state('task', {
            url: '/task',
            template: tpl,
            controller: 'TaskCtrl',
            controllerAs: 'vm'
        })
        // nested states
        // url will be nested (/task/step1)
        .state('task.step1', {
            url: '/step1',
            template: tpl1,
            controller: 'TaskStep1Ctrl',
            controllerAs : 'step1'
        })
        .state('task.step2', {
            url: '/step2',
            template: tpl2
        })
        .state('task.step3', {
            url: '/step3',
            template: tpl3
        });

}

taskRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default taskRouteConfig;

