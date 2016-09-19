
class ProjectGeneralCtrl {
    constructor() {
       this.headers = [
           {title: "ID", name: "id"},
           {title: "Name", name: "name"},
           {title: "Category", name: "category"},
           {title: "Issue", name: "issue"},
           {title: "Owner", name: "owner"}
       ]

        this.data = [
            {id: '1', name: 'aa', category: 'bbb', issue: '1', owner: 'aaa'},
            {id: '2', name: 'bb', category: 'bbb', issue: '1', owner: 'aaa'},
            {id: '3', name: 'cc', category: 'bbb', issue: '1', owner: 'aaa'},
            {id: '4', name: 'dd', category: 'bbb', issue: '1', owner: 'aaa'},
            {id: '5', name: 'ee', category: 'bbb', issue: '1', owner: 'aaa'}
        ]
    }
}



export default ProjectGeneralCtrl;