let TaskListConst = {
    tabs: [
        {name: '1', title: 'All Plans', id: 0, active: true},
        {name: '2', title: 'Maintenance', id: 2},
        {name: '3', title: 'Cleaning', id: 1},
        {name: '4', title: 'Security', id: 3},
        {name: '5', title: 'Food Service', id: 4}
    ],

    headers : [
        {checkbox: true, width: '5%'},
        {
            name: 'task_name',
            title: 'Name',
            type: 'href',
            href: '/task/detail/',
            width: '35%',
            cursor: 'pointer',
            hrefcol: 'task_id'
        },
        {name: 'classification_name', title: 'Classification', width: '15%'},
        {name: 'workload_name', title: 'Work Load', width: '15%'}
    ]
}

export default TaskListConst;