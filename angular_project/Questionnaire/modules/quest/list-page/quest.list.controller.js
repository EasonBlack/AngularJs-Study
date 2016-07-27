let QUESTCONST = new WeakMap();

class QuestListController {
    constructor(QuestConst) {
        QUESTCONST.set(this,QuestConst)
    }
}

export default QuestListController;