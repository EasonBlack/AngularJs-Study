let HTTP = new WeakMap();

class FetchService {
    constructor($http) {
        HTTP.set(this, $http);
    }

    fetchList(api) {
        return HTTP.get(this).get(api)
            .then((res)=> {
                return {
                    data: res.data,
                    total: 15,
                    page: 1,
                    pagesize: 10,
                    pageNum: Math.ceil(15 / 10)
                }
            })
    }

    static factory($http) {
        return new FetchService($http);
    }

}

FetchService.$inject = ['$http']

export default FetchService;