
let TASKLISTCONST = new WeakMap();
let FETCHSERVICE = new WeakMap();

class TaskController {
    
    constructor($http, TaskListConst, FetchService) {

        TASKLISTCONST.set(this, TaskListConst);
        FETCHSERVICE.set(this, FetchService);
        this.tabs = TASKLISTCONST.get(this).tabs;
        this.list = {}
        this.list.headers = TASKLISTCONST.get(this).headers;
        this.init();
    }

    init() {
        FETCHSERVICE.get(this).fetchList('../../../data/task.json')
            .then((list) =>{
                this.list = Object.assign(this.list, list);
            })
    }

    setTab(tab) {
        this.tabs.forEach(function (t) {
            t.active = false;
        });
        tab.active = true;
        this.type = tab.id;
    }

    add() {
        alert('Add');
    }
}

TaskController.$inject = ['$http', 'TaskListConst', 'FetchService'];

export default TaskController;