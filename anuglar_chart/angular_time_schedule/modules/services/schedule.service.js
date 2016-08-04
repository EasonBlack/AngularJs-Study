class ScheduleService {
    constructor(schedule) {
        Object.assign(this, schedule);
    }

    show() {
        return `${this.name}`;
    }

    static factory() {
        return ScheduleService;
    }
}

class ScheduleBG {
    constructor() {
        this.cut = [
            {id: '0500', name: '5:00'},
            {id: '0600'},
            {id: '0700', name: '7:00'},
            {id: '0800'},
            {id: '0900'},
            {id: '1000', name: '10:00'},
            {id: '1100'},
            {id: '1200'},
            {id: '1300', name: '13:00'},
            {id: '1400'},
            {id: '1500'},
            {id: '1600', name: '16:00'},
            {id: '1700'},
            {id: '1800'},
            {id: '1900', name: '19:00'},
            {id: '00'},
            {id: '2200', name: '22:00'},
        ]
    }
}

export default ScheduleService;