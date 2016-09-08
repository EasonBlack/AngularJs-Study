
class FeedsCtrl {
    constructor($state) {
       console.log($state.params.id);
    }
}

FeedsCtrl.$inject = ['$state']

export default FeedsCtrl;