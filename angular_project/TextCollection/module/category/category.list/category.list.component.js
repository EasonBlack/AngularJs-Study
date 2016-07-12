angular.module('category.module')
    .component('appCategoryList', {
        templateUrl: '/module/category/category.list/category.list.view.html',
        bindings : {
            items: '<'
        },
        controller: ['$scope',function($scope){
            this.filterType = (item)=>{
                if(!item.type ||  item.type.length ==0) {
                    return true;
                } else {
                    return false;
                }
            }

            this.toggleSelect = (c)=> {
                c.checked = !c.checked;
            }
        }]
    })