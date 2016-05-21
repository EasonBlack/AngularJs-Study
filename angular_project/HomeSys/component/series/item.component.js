angular.module('app')
    .component('appItemEdit', {
        templateUrl: 'component/series/item.component.html',
        bindings: {
            val: '=',
            type: '@'
        },
        controller: ['modelService',function (modelService) {
            var ctrl = this;

            ctrl.add = ()=>{
                modelService.addItem(ctrl.type,{name: ctrl.newName})
                .then((res)=>{
                        alert('Success');
                        getlist();
                    })
            }

            var getlist = () => {
                modelService.getList(ctrl.type)
                .then((res)=> {
                        ctrl.list = res.data;
                    })
            }
            getlist();
        }
        ]
    })