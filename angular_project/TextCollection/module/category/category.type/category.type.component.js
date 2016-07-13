class appCategoryTypeCtrl {
    constructor() {

    }

    toggleSelect(type) {
        type.checked = !type.checked;
    }

    set() {
        let _type = [];
        this.types.forEach((t)=> {
            if (t.checked) {
                _type.push(t.name);
            }
        })
        this.setType({types: _type});
    }
}


let appCategoryType = {
    templateUrl: '/module/category/category.type/category.type.view.html',
    bindings: {
        types: '<',
        setType: '&'
    },
    controller: appCategoryTypeCtrl
}

export {appCategoryType}

