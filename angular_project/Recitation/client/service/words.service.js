angular.module('app')
    .factory('wordListService', ['$http', '$rootScope', 'ngDialog', 'growl', function ($http, $rootScope, ngDialog, growl) {
        class WordList {
            constructor(page = 1) {
                this.refresh = 0;
                $http.get($rootScope.api_url + 'word', {params: {page: page}})
                    .then((res)=> {

                        this.rows = res.data.data;
                        this.headers = [
                            {name: 'name', title: 'NAME'},
                            {name: 'read', title: 'READ'},
                            {name: 'mean', title: 'MEAN'},
                            {name: 'star', title: 'STAR'},
                            {name: 'isShow', title: 'SHOW'},
                            {
                                name: 'show', title: 'SHOW',
                                type: 'action', key: 'Trigger Show', action: this.triggerShow.bind(this)
                            },
                            {
                                name: 'delete', title: 'DELETE',
                                type: 'action', key: 'DELETE', action: this.delete.bind(this)
                            },
                        ]
                        this.size = 10;
                        this.count = res.data.count;
                        this.page = page;

                    })
            }

            add(item) {
                $http.post($rootScope.api_url + 'word', item)
                    .then((res)=> {
                        alert('Success');
                    });
            }

            delete(row) {
                var _id = row._id;
                $http.delete(`${$rootScope.api_url}word/${_id}`)
                    .then((res)=> {
                        console.log(res);
                        $rootScope.refresh = $rootScope.refresh + 1;
                        growl.success("Success", {});
                    })
            }

            triggerShow(row) {
                var obj = {
                    isShow: !row.isShow
                }
                var _id = row._id;
                $http.put(`${$rootScope.api_url}word/${_id}`, obj)
                    .then((res)=> {
                        $rootScope.refresh = $rootScope.refresh + 1;
                        growl.success("Success", {});
                    });
            }


        }

        return WordList;
    }]);