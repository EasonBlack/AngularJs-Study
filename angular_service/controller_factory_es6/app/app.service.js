//let AppService = ()=> {
//    class appService {
//        constructor(str) {
//            this.text = str;
//        }
//
//        setMessage(str) {
//            this.text = str;
//        }
//
//        getMessage() {
//            return this.text;
//        }
//    }
//
//    return appService;
//
//}


class AppService {
    constructor(str) {
        this.text = str;
    }

    setMessage(str) {
        this.text = str;
    }

    getMessage() {
        return this.text;
    }

    static factory() {
        return AppService;
    }
}


export {AppService}