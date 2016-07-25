let STATE = new WeakMap();

class TaskAddController {
    constructor($state) {
        STATE.set(this, $state);
    }

    backList() {
        STATE.get(this).go('task');
    }
}

TaskAddController.$inject = ['$state']

export default TaskAddController;