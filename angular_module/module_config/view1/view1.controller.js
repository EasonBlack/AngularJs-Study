
const VIEW1SERVICE = new WeakMap();

class view1Controller {
    constructor(view11Service) {
        this.message = 'hello';
        VIEW1SERVICE.set(this, view11Service);
    }

    show() {
        this.message = VIEW1SERVICE.get(this).setContent();
    }
}

view1Controller.$inject = ['view11Service'];

export {view1Controller}