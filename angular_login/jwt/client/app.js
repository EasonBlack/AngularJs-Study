import './login/login.module.js'
import './home/home.module.js'

angular.module('app', [
    'app.home',
    'app.login',
    'angular-storage',
    'angular-jwt'
])
    .config(function ($urlRouterProvider, $httpProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptor');
    })
    .run(function ($rootScope, $state, store) {
        $rootScope.$on('$stateChangeStart', function (e, to, params, from) {
            console.log(to, params, from);
            if (to.name == 'login') return;

            if (!store.get('jwt')) {
                e.preventDefault();
                $state.go('login');
            }
        });
    })
    .factory('httpRequestInterceptor', ['store', function (store) {
        return {
            request: function (config) {
                config.headers['Authorization'] = store.get('jwt')
                return config;
            }
        };
    }]);