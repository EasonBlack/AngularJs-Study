describe('test app', function () {

    beforeEach(module('app'));

    describe('app controller', function () {
        var $scope = {};

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            var ctrl = $controller("appCtrl", {$scope:$scope});
        }));

        it('user name', inject(function($controller) {
            expect($scope.userName).toBe('AA');
        }));

        it('user name 2', inject(function($controller) {
            expect($scope.userName2).toBe('BB');
        }));

        it('user name 3', inject(function($controller) {
            expect($scope.userName3).toBe('CC');
        }));
        
    });
});
