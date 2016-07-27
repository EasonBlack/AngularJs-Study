let QUESTCONST = new WeakMap();

class QuestController {
    constructor(QuestConst) {
        QUESTCONST.set(this,QuestConst)
        this.quests = QUESTCONST.get(this).quests;
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
        let answer = this.quests.map((q)=> {
            return q.answer || q.others;
        })
        console.log(answer);
    }
}

QuestController.$inject = ['QuestConst'];

export default QuestController;