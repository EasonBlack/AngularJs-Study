angular.module('app')
    .factory('contextListService', ['fetchService', function (fetchService) {
        class contextListService {
            constructor(obj) {
                this.contextList = [];
                this.saved = false;
            }

            getList() {
                return this.contextList;
            }

            addContext(c) {
                this.contextList.push(c);
                this.saved = false;
            }

            deleteContext(obj) {
                this.contextList.forEach((c, i)=> {
                    if (c === obj) {
                        this.contextList.splice(i, 1);
                    }
                });
            }

            setType(type) {
                this.contextList.forEach((c)=> {
                    if (c.checked && c.type !== type) {
                        c.type = type;
                        this.saved = false;
                    }
                })
            }

            getContext(callback) {
                fetchService.getContextList('context')
                    .then((data)=> {
                        callback(data)
                    });
            }

            saveContext(callback) {
                fetchService.getContextList('context')
                    .then((data)=> {
                        data || (data = []);
                        let list = [...data, ...this.contextList];
                        fetchService.setContextList('context', list)
                            .then(()=> {
                                this.saved = true;
                                this.contextList = [];
                                callback();
                            })
                    });

            }

        }

        return new contextListService()
    }]);