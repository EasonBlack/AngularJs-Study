class appCategoryListCtrl {
    constructor() {

    }

    filterType(item) {
        if (!item.type || item.type.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    toggleSelect(c) {
        c.checked = !c.checked;
    }
}

let appCategoryList = {
    templateUrl: '/module/category/category.list/category.list.view.html',
    bindings: {
        items: '<'
    },
    controller: appCategoryListCtrl
}

export {appCategoryList}