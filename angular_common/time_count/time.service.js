angular.module('app')
    .service('TimeService', function() {
        this.time = {
            h: 0,
            m: 0,
            s: 0
        }
    });