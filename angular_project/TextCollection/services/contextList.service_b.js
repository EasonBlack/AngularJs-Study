angular.module('app')
    .service('contextListService', ['fetchService', function (fetchService) {
        this.contextList = [];
        this.saved = false;

        this.getList = ()=> {
            return this.contextList;
        }

        this.addContext = (c)=> {
            this.contextList.push(c);
            this.saved = false;
        }

        this.setType = (type)=> {
            forEach(this.contextList, (c)=> {
                if (c.checked && c.type !== type) {
                    c.type = type;
                    this.saved = false;
                }
            })
        }
        this.saveContext = ()=> {
            fetchService.setContextList('context', this.contextList)
                .then(()=> {
                    this.saved = true;
                })
        }
    }]);