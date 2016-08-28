let CURRENTSERVICE = new WeakMap();

class CurrentCtrl {
    constructor(CurrentService) {
        CURRENTSERVICE.set(this, CurrentService);
        this.fetchCards();
    }

    fetchCards() {
        CURRENTSERVICE.get(this).fetchCards()
            .then((res)=> {
                this.cards = res.data;
            })
    }

    addCurrent() {
        this.cards.push({name: '', trophy: 0});
    }

    addNumber(card) {
        card.trophy = parseInt(card.trophy || 0) + 1;
    }

    edit(card) {
        card.isEdit = true;
    }

    submit(card) {
        CURRENTSERVICE.get(this).submitCard(card)
            .then((res)=> {
                this.fetchCards();
            })
    }

    save(card) {
        card.isEdit = false;
    }
}

CurrentCtrl.$inject = ['CurrentService'];

export default CurrentCtrl;