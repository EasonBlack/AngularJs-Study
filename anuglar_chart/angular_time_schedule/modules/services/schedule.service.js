let ScheduleBG_Cut = [
    {id: '0400'},
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
    {id: '1700', visible: true},
    {id: '1800', visible: true},
    {id: '1900', name: '19:00'},
    {id: '2000', visible: true},
    {id: '2100', visible: true},
    {id: '2200', name: '22:00'},
    {id: '2300'}
]

class ScheduleService {
    constructor(schedule) {
        Object.assign(this, schedule);
        this.BgCut = ScheduleBG_Cut;
    }

    show() {
        return `${this.name}`;
    }

    calculateSpan(start, end) {
        let startHour = start.substring(0,2)
        let startQuart = start.substring(2, 4);
        let endHour = end.slice(0,2)
        let endQuart = end.substring(2, 4);
        let _start = parseInt(startHour) * 4 + parseInt(startQuart / 15);
        let _end = parseInt(endHour) * 4 + parseInt(endQuart / 15);
        return _end - _start;
    }

    recodeSchedule() {
        let _schedule = [];
        for (let i = 0; i < this.list.length; i++) {
            let current = this.list[i];
            let prev = i ? this.list[i - 1] : null;
            if (i - 1 < 0) {
                _schedule.push({start: '0400', end: current.start, color: 'none', span: this.calculateSpan('0400',current.start)});
            } else if (prev.end != current.start) {
                _schedule.push({start: prev.end, end: current.start, color: 'none',span: this.calculateSpan(prev.end,current.start)});
            }

            _schedule.push({start: current.start, end: current.end, color: current.color,span: this.calculateSpan(current.start,current.end)});
            if (i == this.list.length - 1) {
                _schedule.push({start: current.end, end: '2400', color: 'none',span: this.calculateSpan(current.end,'2400')});
            }
        }
        console.log(_schedule)
        return _schedule;
    }

    drawSchedulre() {

    }

    static factory() {
        return ScheduleService;
    }
}


export default ScheduleService;