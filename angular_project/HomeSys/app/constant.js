angular.module('app')
    .constant('appConstant', {
       series_status: [
           {id: 'finish', name: 'Finish'},
           {id: 'giveup', name: 'Give Up'},
           {id: 'watching', name: 'Watching'}
       ]
    })
    .run(function ($rootScope, appConstant) {
        $rootScope.series_status = appConstant.series_status;
    });


