angular.module('app')
    .constant('appConstant', {
        word_star: [
            {id: 1, name: '1 Star'},
            {id: 2, name: '2 Star'},
            {id: 3, name: '3 Star'},
            {id: 4, name: '4 Star'},
            {id: 5, name: '5 Star'}
        ]
    })
    .run(function ($rootScope, appConstant) {
        $rootScope.word_star = appConstant.word_star;
    });