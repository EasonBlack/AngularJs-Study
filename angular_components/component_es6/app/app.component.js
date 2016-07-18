class AppComponentController {
    constructor() {
        this.title='aaaa:';
    }
}


export let appComponent = {
    template: '<div><label>{{$ctrl.title}}</label><span>{{$ctrl.val}}</span></div>',
    bindings: {
        val: '='
    },
    controller: AppComponentController
}