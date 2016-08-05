let FETCHSERVICE = new WeakMap();
let SCHEDULE = new WeakMap();


class ScheduleController {
    constructor($scope, FetchService, ScheduleService) {
        FETCHSERVICE.set(this, FetchService);
        SCHEDULE.set(this, ScheduleService);
        this.$scope = $scope;
        this.schedule = null;
        this.test = 'mssssss';
        this.init();
    }

    init() {
        FETCHSERVICE.get(this).fetchByApi('../../data/schedule.json')
            .then((res) => {
                this.schedule = new (SCHEDULE.get(this))(res.data);
                this.tasks = this.schedule.recodeSchedule();
                this.$scope.$broadcast("Schedule_Ready");
            })
    }
}

ScheduleController.$inject = ['$scope', 'FetchService', 'ScheduleService'];

export default ScheduleController;