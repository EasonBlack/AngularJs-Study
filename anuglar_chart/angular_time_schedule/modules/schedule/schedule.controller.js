let FETCHSERVICE = new WeakMap();
let SCHEDULE = new WeakMap();

class ScheduleController {
    constructor(FetchService, ScheduleService) {
        FETCHSERVICE.set(this, FetchService);
        SCHEDULE.set(this, ScheduleService);
        this.schedule = null;
        this.init();
    }

    init() {
        FETCHSERVICE.get(this).fetchByApi('../../data/schedule.json')
            .then((res) => {
                console.log(res);
                this.schedule = new (SCHEDULE.get(this))(res.data);
            })
    }
}

ScheduleController.$inject = ['FetchService', 'ScheduleService'];

export default ScheduleController;