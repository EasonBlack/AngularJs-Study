import 'angular';
import 'angular-ui-router';
import AppComponent from './app/app.component';

angular.module('app', ['ui.router'])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                template: "<app></app>"
            })
    })
    .component('app', AppComponent);