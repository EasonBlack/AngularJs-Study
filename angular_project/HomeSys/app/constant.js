angular.module('app')
    .constant('appConstant', {
        config: {
            start_date : '2016-05-30'
        },
        series_status: [
            {id: 'finish', name: 'Finish'},
            {id: 'giveup', name: 'Give Up'},
            {id: 'watching', name: 'Watching'}
        ],
        daily_type: [
            {id: 'series', name: 'Series'},
            {id: 'book', name: 'Book'},
            {id: 'it', name: 'IT'},
            {id: 'film', name: 'Film'},
            {id: 'house', name: 'House'},
            {id: 'study', name: 'Study'},
            {id: 'job', name: 'Job'},
            {id: 'writing', name: 'Writing'},
            {id: 'comic', name: 'Comic'}
        ],
        item_comment: [
            {id: 'great', name: 'Great'},
            {id: 'good', name: 'Good'},
            {id: 'normal', name: 'Normal'},
            {id: 'bad', name: 'Bad'},
            {id: 'worst', name: 'Worst'},
        ]
    })
    .run(function ($rootScope, appConstant) {

        $rootScope.series_status = appConstant.series_status;
        $rootScope.daily_type = appConstant.daily_type;
        $rootScope.item_comment = appConstant.item_comment;
        $rootScope.config = appConstant.config;
    });


