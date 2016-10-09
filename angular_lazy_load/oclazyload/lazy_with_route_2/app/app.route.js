

let AppRouteConfig = ($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state('view1', {
            url: '/view1',
            templateUrl: "/view1/view1.template.html",
            controller: 'View1Controller',
            controllerAs: 'vm',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();
                require.ensure([], function() {
                    var mod = require('../view1/view1.module');
                    $ocLazyLoad.load({
                        name: 'view1.module'
                    });
                    deferred.resolve();
                });

                return deferred.promise;
            }]
            // resolve: {
            //     lazyLoad: function($ocLazyLoad) {
            //         return $ocLazyLoad.load('/build/view1.js');
            //     }
            // }
        })
}

AppRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default AppRouteConfig;

