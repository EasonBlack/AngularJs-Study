angular.module('app')
    .factory('contextListService', ['fetchService', 'contextService', function (fetchService, contextService) {
        class contextListService {
            constructor(obj) {
                this.contextList = [];
                this.contextSavedList = [];
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

            setType(types) {
                this.contextSavedList.forEach((o)=> {
                    if (o.checked) {
                        o.type = [...types];
                    }
                })
            }

            getContext(callback) {
                return fetchService.getContextList('context')
                    .then((data)=> {
                        this.contextSavedList = data;
                    });
            }

            saveTotalContext() {
                return fetchService.setContextList('context', this.contextSavedList.map((o)=> {
                    console.log(contextService);
                    let {context, type} = o;
                    return {context, type}
                }))
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
                                this.contextSavedList = list;
                                callback();
                            })
                    });

            }

        }

        return new contextListService()
    }]);