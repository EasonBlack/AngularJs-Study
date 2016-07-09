angular.module('import.module')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise("/import");

        $stateProvider
            .state('import', {
                url: "/import",
                views: {
                    "": {
                        templateUrl: "/module/import/import.view.html"
                    },
                    "input@import": {
                        templateUrl: "/module/import/import.input/import.input.view.html",
                        controller: 'ImportInputController'
                    },
                    "list@import": {
                        templateUrl: "/module/import/import.list/import.list.view.html",
                        controller: 'ImportListController'
                    }
                }
            })
    }])