angular.module('app')
    .controller('wordRollCtrl', ['$scope', 'wordFactory', '$interval', '$location', 'ngDialog' ,
        function ($scope, wordFactory, $interval , $location, ngDialog) {
        var words = [];
        var stop, index = 0, len;
        $scope.currentName = '';
        $scope.currentMean = '';
        $scope.currentRead = '';
        $scope.currentImage = '';
        $scope.control= {
            hasmean:true
        }
        $scope.back = ()=> {
            $location.path('/words');
        }
        $scope.newword = ()=> {
            ngDialog.open({
                template: './interface/words/newword.html',
                controller: 'newwordCtrl'
            })
                .closePromise.then(function () {
                    init();
                });
        }

        var roll = ()=> {
            wordFactory.getWords()
                .then((res)=> {
                    words = res.data;
                    len = res.data.length;
                    words = words.sort(function () {
                        return Math.random() - 0.5
                    })
                    stop = $interval(function () {
                        $scope.currentName = words[index].name;
                        $scope.currentMean = words[index].mean;
                        $scope.currentRead = words[index].read;
                        $scope.currentImage = words[index].image;
                        if (index < len - 1) {
                            index++
                        } else {
                            index = 0;
                            $interval.cancel(stop);
                            roll();
                        }
                    }, 2500);
                })
        }
        roll();


    }])