angular.module('app.login', [
    'ui.router',
    'angular-storage'
])
    .config(function ($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            controller: 'loginCtrl',
            templateUrl: 'login/login.template.html'
        });
    })
    .controller('loginCtrl', ['$scope', 'store', '$http', '$state', function ($scope, store, $http, $state) {
        $scope.user = {};
        $scope.loginUnSave = ()=> {
            $state.go('home');
        }
        $scope.login = ()=> {
            $http({
                url: 'http://localhost:3000/login',
                method: 'POST',
                data: $scope.user
            }).then(function (response) {
                store.set('jwt', response.data.id_token);
                $state.go('home');
            }, function (error) {
                alert(error.data);
            });
        }
    }])