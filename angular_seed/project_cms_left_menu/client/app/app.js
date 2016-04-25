import angular from 'angular'
import 'angular-route';
import 'angular-sanitize'
import '../vendor/paging'
import '../vendor/ngDialog'

angular.module('app', ['ngRoute', 'ngSanitize', 'bw.paging', 'ngDialog'])
