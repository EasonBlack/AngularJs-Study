angular.module('app')
    .component('appTable', {
        templateUrl: 'component/table/app.table.html',
        bindings: {
            list: '<'
        },
        controller: ['$scope',function ($scope) {
            let page_size = 10;

            $scope.$on("List_Ready", ()=>{
                this.rows = this.list.rows;
                let page = 1;
                this.list.rows = _.slice(this.rows, (page - 1) * page_size, (page - 1) * page_size + page_size)
                this.list.size = page_size;
                this.list.count =  this.rows.length;
                this.list.page = page;
            });

            this.pageTo = (page)=> {
                this.list.rows = _.slice(this.rows, (page - 1) * page_size, (page - 1) * page_size + page_size)
                this.list.page = parseInt(page) + 1;
            }
        }]
    })