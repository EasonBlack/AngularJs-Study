
angular.module('app')
    .component('appFilmEdit', {
        templateUrl: 'component/series/film.component.html',
        bindings: {
            newitem: '=',
            date: '<',
            dailyitemid: '<'
        },
        controller: ['filmService', function (filmService) {
            var ctrl = this;
            ctrl.add = ()=> {
                ctrl.newitem.ref = ctrl.dailyitemid;
                filmService.addItem(ctrl.newitem)
                .then((res)=>{
                        console.log(res);
                        alert('Success');
                    })
            }
            ctrl.update =()=>{
                filmService.updateItem(ctrl.newitem._id, ctrl.newitem)
                    .then((res)=>{
                        console.log(res);
                        alert('Success');
                    })
            }
        }]
    })