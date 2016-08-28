import 'angular';
import 'angular-ui-router';
import './components/current/current.module';
import './components/total/total.module';
import './components/services/services.module';
import AppComponent from './components/app/app.component';


angular.module('app', ['app.current', 'app.total'])
    .component('app', AppComponent)
