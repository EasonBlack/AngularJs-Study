angular.module('category.module')
    .component('appCategoryType', {
        templateUrl: '/module/category/category.type/category.type.view.html',
        bindings : {
            types: '<',
            setType: '&'
        },
        controller: ['$scope',function($scope){
            this.toggleSelect = (type)=> {
                type.checked = !type.checked;
            }

            this.set = ()=>{
                let _type = [];
                this.types.forEach((t)=>{
                    if(t.checked) {
                        _type.push(t.name);
                    }
                })
                this.setType({types: _type});
            }
        }]
    })