angular.module('app')
    .controller('MainController',['$scope',function($scope){
           $scope.navs = [
               {id: 1, href: 'dashboard' , title: 'DASHBOARD'},
               {id: 2, href: 'series' , title: 'SERIES'},
               {id: 3, href: 'daily' , title: 'DAILY'}
           ]


    }])
