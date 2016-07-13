class AppController {
    constructor($scope) {
        this.$scope = $scope;
        this.$scope.message = 'xxxxxxxx';
    }
}

AppController.$inject = ['$scope'];

export {AppController}