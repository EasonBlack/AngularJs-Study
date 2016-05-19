angular.module('app')
    .constant('appConstant', {
        series_status: [
            {id: 'finish', name: 'Finish'},
            {id: 'giveup', name: 'Give Up'},
            {id: 'watching', name: 'Watching'}
        ],
        daily_type: [
            {id: 'series', name: 'Series'},
            {id: 'book', name: 'Book'},
            {id: 'it', name: 'IT'},
            {id: 'dddd', name: 'ddddd'}
        ]
    })
    .run(function ($rootScope, appConstant) {
        $rootScope.series_status = appConstant.series_status;
        $rootScope.daily_type = appConstant.daily_type;
    });


