class QuestController {
    constructor() {
        this.message = 'Hello';
        this.quests = [
            'aaaaa',
            'bbbbb',
            'ccccc',
            'ddddd',
            'eeeeee',
            'fffff',
            'bbbbbaas',
            '1232323',
            'ccxzzzz',
        ]
        this.current = 0;
    }

    prev() {
        this.current = this.current - 1;
        this.position = this.current * 100;
    }

    next() {
        this.current = this.current + 1;
        this.position = this.current * 100;
    }

}

export default QuestController;