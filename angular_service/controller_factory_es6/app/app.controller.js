const APPSERVICE = new WeakMap();

class AppController {
    constructor(AppService) {
        APPSERVICE.set(this, AppService);
        this.AppService = AppService;
        this.init();
    }

    init() {
        this.message = new (APPSERVICE.get(this))('Hello');
        //this.message = new this.AppService('Init');
    }
    
}

AppController.$inject = ['AppService'];

export {AppController}