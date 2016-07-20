import tpl from './task.step2.components.tpl.html';

class TaskStep2Ctrl {
    constructor() {
        this.title = 'This is step 2';
    }
}

export let taskStepTwo = {
    template: tpl,
    bindings: {
        info2: '='
    },
    controller: TaskStep2Ctrl
}