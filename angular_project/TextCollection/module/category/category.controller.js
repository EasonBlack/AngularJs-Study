const ContextListService = new WeakMap();

class CategoryController {
    constructor(contextListService) {

        this.types = [
            {name: 'start', checked: false},
            {name: 'high', checked: false},
            {name: 'end', checked: false}
        ];
        this.items = [];
        ContextListService.set(this, contextListService);
        this.init();
    }

    init() {
        let self = this;
        ContextListService.get(this).getContext()
            .then(()=> {
                this.items = ContextListService.get(this).contextSavedList;
            })
    }

    set(types) {
        let self = this;
        ContextListService.get(this).setType(types);
        ContextListService.get(this).saveTotalContext()
            .then(()=> {
                this.init();
            });
    }
}

CategoryController.$inject = ['contextListService'];

export {CategoryController}

