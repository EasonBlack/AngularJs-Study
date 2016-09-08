
import controller from './app.table.component.ctrl.js';
import template from './app.table.component.tpl.html';

let AppTableComponent = {
    template,
    controller,
    bindings: {
        headers: '<',
        data: '<'
    }
}

export default AppTableComponent;
