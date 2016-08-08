import tpl from './menu.component.tpl.html'

class appMenuCtrl {
    constructor() {
        this.navs = [
            {title: 'DASHBOARD', href: '#/dashboard', id: 'dashboard'},
            {title: 'PROTECTION PLAN', href: '#/protection', id: 'protection'},
            {title: 'TASK', href: '#/task', id: 'task'}
        ]
        this.selectNav = 'dashboard';
    }

    activeNav(nav) {
        this.selectNav = nav.id;
    }
}


let appMenu = {
    template: tpl,
    bindings: {},
    controller: appMenuCtrl,
    replace: true
}

export default appMenu