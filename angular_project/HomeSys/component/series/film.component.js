
angular.module('app')
    .component('appFilmEdit', {
        templateUrl: 'component/series/film.component.html',
        bindings: {
            newitem: '=',
            date: '<',
            dailyitemid: '<'
        },
        controller: ['listService', function (listService) {
            var ctrl = this;
            ctrl.add = ()=> {

            }
        }]
    })