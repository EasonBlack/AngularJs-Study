import tpl from './task.step1.components.tpl.html';

class TaskStep1Ctrl {
    constructor() {
        this.title = 'This is step 1';
    }
}

export let taskStepOne = {
    template: tpl,
    bindings: {
        info1: '='
    },
    controller: TaskStep1Ctrl
}