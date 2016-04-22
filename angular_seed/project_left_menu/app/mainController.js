import angular from 'angular'

angular.module('app')
    .controller('MainController',['$scope',function($scope){
         $scope.menus = [
             {title: 'DASHBOARD' , href: '#/dashboard' },
             {title: 'LOCATION' , children: [
                 {title: 'ADD',  href: '#/location/add' },
                 {title:  'LIST', href: '#/location' }
             ]},
             {title: 'PROTECTION' , children: [
                 {title: 'ADD',  href: '#/protection/add' },
                 {title:  'LIST', href: '#/protection' }
             ]},
             {title: 'MAINTENANCE' , children: [
                 {title: 'ADD',  href: '#/maintenance/add' },
                 {title:  'LIST', href: '#/maintenance' }
             ]},
             {title: 'EMPOLYEE' , children: [
                 {title: 'ADD',  href: '#/employee/add' },
                 {title:  'LIST', href: '#/employee' }
             ]},
         ]

        $scope.getSub = function(menu) {
            $scope.menus.forEach(function(e){
                e.opensub = false;
            });
           if(menu.children){
               menu.opensub = true;
           } else {
               return false;
           }
        }
    }])