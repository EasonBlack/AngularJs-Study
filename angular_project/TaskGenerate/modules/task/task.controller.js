let HTTP = new WeakMap();

class TaskController {
    constructor($http) {
        HTTP.set(this, $http);
        this.tabs = [
            {name: '1', title: 'All Plans', id: 0, active: true},
            {name: '2', title: 'Maintenance', id: 2},
            {name: '3', title: 'Cleaning', id: 1},
            {name: '4', title: 'Security', id: 3},
            {name: '5', title: 'Food Service', id: 4},
        ]
        this.list = {}
        this.list.headers = [
            {checkbox: true, width: '5%'},
            {
                name: 'task_name',
                title: 'Name',
                type: 'href',
                href: '/routing/detail/',
                width: '35%',
                cursor: 'pointer',
                hrefcol: 'task_id'
            },
            {name: 'classification_name', title: 'Classification', width: '15%'},
            {name: 'workload_name', title: 'Work Load', width: '15%'}
        ]

        this.init();
    }

    init() {
        HTTP.get(this).get('../../../data/task.json')
            .then((res)=> {
                this.list.data = res.data;
                this.list.total = 15;
                this.list.page = 1;
                this.list.pagesize = 10;
                this.list.pageNum =  Math.ceil( this.list.total / 10);
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

TaskController.$inject = ['$http'];

export default TaskController;