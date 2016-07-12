angular.module('category.module')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('category', {
                url: "/category",
                views: {
                    "": {
                        templateUrl: "/module/category/category.view.html",
                        controller: 'CategoryController'
                    },
                    // "list@category": {
                    //     templateUrl: "/module/category/category.list/category.list.view.html",
                    //     controller: 'CategoryListController'
                    // },
                    // "type@category": {
                    //     templateUrl: "/module/category/category.type/category.type.view.html",
                    //     controller: 'CategoryTypeController'
                    // }
                }
            })
    }])