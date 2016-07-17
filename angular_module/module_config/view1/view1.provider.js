class View11Service {
    constructor() {
       this.message = 'xxxxxx';
    }
    setMessage(value) {
        this.message = value;
    }
    /*@ngInject*/
    $get() {
        return {
            setContent: ()=>{
                return this.message;
            }
        };
    }
}

export {View11Service}
