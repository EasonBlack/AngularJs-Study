angular.module('app')
    .controller('MainController', ['$scope', function ($scope) {
        $scope.navs = [
            {id: 1, href: '#/dashboard', title: 'DASHBOARD'},
            {id: 2, href: '#/series', title: 'SERIES'},
            {id: 3, href: '#/film', title: 'FILM'},
            {id: 4, href: '#/book', title: 'BOOK'},
            {
                id: 5, title: 'DAILY',
                submenu: [
                    {id: 51, href: '#/daily', title: 'DAILY CALENDAR'}
                ]
            }
        ]

        $scope.getSub = function (menu) {
            $scope.navs.forEach(function (e) {
                e.opensub = false;
            });
            if (menu.submenu) {
                menu.opensub = true;
            } else {
                return false;
            }
        }


    }])
