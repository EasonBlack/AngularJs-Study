import angular  from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux  from 'ng-redux';
import { RootReducer } from '../reducer';
import AppComponent from './app.component';
//import AppCtrl from './app.ctrl';

angular.module('app',
    [
        uiRouter,
        ngRedux
    ])
    .config(($ngReduxProvider) => {
        $ngReduxProvider.createStoreWith(RootReducer);
    })
    //.controller('appCtrl',AppCtrl)
    .component('app', AppComponent)