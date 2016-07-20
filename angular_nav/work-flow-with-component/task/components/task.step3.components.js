import tpl from './task.step3.components.tpl.html';

class TaskStep3Ctrl {
    constructor() {
        this.title = 'This is step 3';
    }
}

export let taskStepThree = {
    template: tpl,
    bindings: {
        info3: '='
    },
    controller: TaskStep3Ctrl
}