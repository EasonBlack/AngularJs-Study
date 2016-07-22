import tpl from './app.list-header.html'

let appListHeader = {
    template: tpl,
    bindings: {
        tabs: '<',
        title1: '@',
        title2: '@',
        onSet: '&',
        onAdd: '&'
    }
}

export default appListHeader;