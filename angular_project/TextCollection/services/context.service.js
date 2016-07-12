angular.module('app')
    .factory('contextService', [function () {
        class contextService {
            constructor(obj) {
                obj || (obj = {})
                this.context = obj.context;
                this.type = obj.type || [];
            }
        }

        return contextService;
    }]);