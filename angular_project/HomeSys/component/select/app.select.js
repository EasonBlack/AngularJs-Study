angular.module('app')
    .component('appSelect', {
        templateUrl: 'component/select/app.select.html',
        bindings: {
            val: '=',
            list: '<',
            editable: '<',
            title: '@',
            placeholder: '@',
            showcol: '@'
        },
        controller: function () {
            var ctrl = this;
            ctrl.getName = (id)=> {
                console.log(id);
                var result = ctrl.list.filter((l)=> {return  l.id == id})[0];
                if (result) {
                    return result.name;
                } else {
                    return '';
                }
            }
        }
    })