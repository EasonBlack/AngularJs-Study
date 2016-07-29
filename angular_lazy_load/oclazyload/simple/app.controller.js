angular.module('app')
.controller('appCtrl',function($ocLazyLoad){
        $ocLazyLoad.load('test.js');
    })