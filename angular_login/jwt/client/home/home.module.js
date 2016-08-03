angular.module('app.home', [
    'ui.router',
    'angular-storage'
])
    .config(function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            controller: 'homeCtrl',
            templateUrl: 'home/home.template.html'
        });
    })
    .controller('homeCtrl', ['$scope', 'store', '$http', '$state', function ($scope, store, $http, $state) {
        $scope.token = store.get('jwt');
        $scope.logout = ()=> {
            store.remove('jwt');
        }
        $http({
            url: 'http://localhost:3000/list',
            method: 'GET'
        }).then((res)=>{
            $scope.msg = res.data;
        })
    }])