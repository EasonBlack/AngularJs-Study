import tpl from  './app.list-table.html';
let LOCATION = new WeakMap();

class appListTableController {
    constructor($location) {
        this.checkAll = false;
        this.selectNum = 0;
        LOCATION.set(this, $location);
    }

    redirect(header, row) {
        LOCATION.get(this).path(header.href + row[header.hrefcol]);
    }

    isArray(item) {
        return Array.isArray(item);
    }

    isNull(val) {
        if (val == 0 || !val) {
            return true;
        }
        return false;
    }

    checkAllItem() {
        this.list.data.forEach((l)=> {
            l.selected = this.checkAll;
        })
        this.checkAll ? this.selectNum = this.list.data.length : this.selectNum = 0;
    }

    check(item) {
        item.selected ? this.selectNum++ : this.selectNum--;
    }
}
appListTableController.$inject = ['$location'];

let appListTable = {
    template: tpl,
    transclude: true,
    controller: appListTableController,
    bindings: {
        list: '<'
    }
}

export default appListTable;
