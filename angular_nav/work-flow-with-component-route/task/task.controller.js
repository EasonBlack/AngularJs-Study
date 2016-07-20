class TaskCtrl {
    constructor() {
        this.message = 'Hello World';
        this.nav = 1;
        this.task = {
            info1: '',
            info2: '',
            info3: ''
        }
    }

    next(step) {
        this.nav = step;
    }

    confirm() {
        console.log(this.task);
    }
}

export default TaskCtrl;