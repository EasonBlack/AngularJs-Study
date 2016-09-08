class LeftNavCtrl {
    constructor() {
        this.navs = [
            {title: "Feed", name: "feed"},
            {title: "Work Order", name: "workorder"},
            {title: "Work Plan", name: "workplan"},
            {title: "Form", name: "form"},
            {title: "Location & Asset", name: "locationasset"},
            {title: "People", name: "people"},
            {title: "Notes", name: "notes"},
            {title: "Report", name: "report"}
        ]
    }
}

LeftNavCtrl.$inject = []

export default LeftNavCtrl;