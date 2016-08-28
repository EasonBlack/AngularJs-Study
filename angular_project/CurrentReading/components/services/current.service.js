
let HTTP = new WeakMap();
let SERVICECONST = new WeakMap();

class CurrentService {
    constructor($http, ServiceConst) {
        HTTP.set(this, $http);
        SERVICECONST.set(this, ServiceConst);
    }

    fetchCards() {
        return HTTP.get(this).get((SERVICECONST.get(this)).api + 'currentreading')
    }

    submitCard(card) {
        if(card._id) {
            return HTTP.get(this).put((SERVICECONST.get(this)).api + 'currentreading/' + card._id, card)
        } else {
            return HTTP.get(this).post((SERVICECONST.get(this)).api + 'currentreading/', card)
        }

    }

    static factory($http, ServiceConst) {
        return new CurrentService($http, ServiceConst);
    }

}

CurrentService.$inject = ['$http', 'ServiceConst']

export default CurrentService;