import tpl from './leftnav.component.tpl.html'

class appLeftNavCtrl {
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

let appLeftNav = {
    template: tpl,
    bindings: {},
    controller: appLeftNavCtrl
}

export {appLeftNav}