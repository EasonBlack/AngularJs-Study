import moment from 'moment';

angular.module('app')
    .factory('seriesItemService', ['$http', '$rootScope', function ($http, $rootScope) {
        var SeriesItem = function (id) {
            var self = this;
            this.initialize = function () {
                if(!id) return ;
                $http.get('http://localhost:2003/series/items/' + id)
                    .then((res)=> {
                        if(!res.data) return ;
                        self.seriesid = res.data.seriesid;
                        self.num = res.data.item.num;
                        self.comment = res.data.item.comment;
                    })
            };

            this.initialize();

        }

        return SeriesItem;
    }]);