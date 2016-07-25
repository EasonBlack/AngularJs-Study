
let TASKLISTCONST = new WeakMap();
let FETCHSERVICE = new WeakMap();
let STATE = new WeakMap();

class TaskController {
    
    constructor($state, TaskListConst, FetchService) {

        STATE.set(this, $state);
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
        STATE.get(this).go('task-add');
    }
}

TaskController.$inject = ['$state', 'TaskListConst', 'FetchService'];

export default TaskController;