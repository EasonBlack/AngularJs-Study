angular.module('app')
    .constant('appConstant', {
        //api_url: 'http://localhost:2006/api/',
        api_url: 'http://192.168.0.104:2006/api/',
        server_url : 'http://192.168.0.104:2006/',
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
        $rootScope.api_url = appConstant.api_url;
        $rootScope.server_url = appConstant.server_url;
    });