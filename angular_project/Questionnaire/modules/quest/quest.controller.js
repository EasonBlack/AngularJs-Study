class QuestController {
    constructor() {
        this.message = 'Hello';
        this.quests = [
            {type: 'radio', title: 'aaaaaaaaaaaa', items: ['aa','bbb'] },
            {type: 'textarea', title: 'bbbbbbbbbbbb' },
            {type: 'radio', title: 'ccccccccc', items: ['ee','wwww'] },
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

    isFirst() {
        if (this.current == 0) {
            return true;
        } else {
            return false;
        }
    }

    isLast() {
        if (this.current == this.quests.length - 1) {
            return true;
        } else {
            return false;
        }
    }

    confirm() {
        alert(123);
    }

}

export default QuestController;