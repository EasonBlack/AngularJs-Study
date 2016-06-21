function View1Route($stateProvider) {
    $stateProvider
        .state('view1', {
            url: "/view1",
            templateUrl: "page/view1/view1.tpl.html",
            controller: 'View1Ctrl'
        })
}

View1Route['$inject'] = ['$stateProvider'];

export default View1Route;