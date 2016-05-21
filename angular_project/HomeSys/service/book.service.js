import moment from 'moment';

angular.module('app')
    .factory('bookService', ['$http', '$rootScope', 'ngDialog', function ($http, $rootScope, ngDialog) {
        var Book = function (id) {
            var self = this;
            this.initialize = function () {
                if (!id) return;
                $http.get('http://localhost:2003/book/' + id)
                    .then((res)=> {
                        self._id = res.data._id;
                        self.name = res.data.name;
                        res.data.data && (self.date = res.data.date);
                        self.author = res.data.author;
                        self.comment = res.data.comment;
                        if (res.data.ref)  self.ref = res.data.ref;
                    })
            };

            this.addItem = (item)=> {
                item.date = moment(item.date).format('YYYY-MM-DD');
                $http.post('http://localhost:2003/book', item)
                    .then((res)=> {
                        self.items = res.data;
                        alert('Success');
                    });
            }

            this.initialize();
        }

        return Book;
    }])