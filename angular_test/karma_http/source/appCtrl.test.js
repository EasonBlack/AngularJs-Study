describe('test app', function () {

    beforeEach(module('app'));

    describe('app controller', function () {
        var $scope = {}, controller, service, $httpBackend;

        beforeEach(inject(function ($rootScope, $controller, appService, _$httpBackend_) {
            $scope = $rootScope.$new();
            controller = $controller("appCtrl", {$scope: $scope});
            service = appService;
            $httpBackend = _$httpBackend_;
            $httpBackend.whenGET('data.json')
                .respond(200,{value: 'link'});
        }));

        it('test user name', inject(function ($controller) {
            $httpBackend.flush();
            $scope.getName();
            expect($scope.name).toBe('Eason');

        }));

        it('test http', inject(function ($controller) {
            var value = '';
            //$httpBackend
            //    .expectGET('data.json')  //fake http
            //    .respond({
            //        value: 'link'
            //    })
            service.get().then(function (res) {
                 value = res.data.value;
            });
            $httpBackend.flush();
            expect(value).toBe('link');

        }));


    });
});
