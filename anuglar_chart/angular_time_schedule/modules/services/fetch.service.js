let HTTP = new WeakMap();

class FetchService {
    constructor($http) {
        HTTP.set(this, $http);
    }

    fetchByApi(api) {
        return HTTP.get(this).get(api)
    }

    static factory($http) {
        return new FetchService($http);
    }

}

FetchService.$inject = ['$http']

export default FetchService;