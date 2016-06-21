function View2Route($stateProvider) {
    $stateProvider
        .state('view2', {
            url: "/view2",
            templateUrl: "page/view2/view2.tpl.html",
            controller: 'View2Ctrl'
        })
}

View2Route['$inject'] = ['$stateProvider'];

export default View2Route;