angular.module('app.service')
.factory('common.service', [function(){
        var getDate = function(){
            return new Date();
        }
        return {
            getDate: getDate
        }
    }])