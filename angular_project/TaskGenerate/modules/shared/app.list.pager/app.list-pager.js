import tpl from './app.list-pager.html'

let appListPager = {
    template: tpl,
    bindings: {
        list: '<',
        onSkip: '&'
    }
}

export default appListPager;