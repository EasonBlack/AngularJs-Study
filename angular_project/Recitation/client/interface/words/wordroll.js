angular.module('app')
    .controller('wordRollCtrl', ['$scope', 'wordFactory', '$interval', function ($scope, wordFactory, $interval) {
        var words = [];
        var stop, index = 0, len;
        $scope.currentWord = '';
        $scope.currentMean = '';
        $scope.currentImage = '';
        var roll = ()=> {
            wordFactory.getWords()
                .then((res)=> {
                    words = res.data;
                    len = res.data.length;
                    words = words.sort(function () {
                        return Math.random() - 0.5
                    })
                    stop = $interval(function () {
                        $scope.currentWord = words[index].name;
                        $scope.currentMean = words[index].mean;
                        $scope.currentImage = words[index].image;
                        if (index < len - 1) {
                            index++
                        } else {
                            index = 0;
                            $interval.cancel(stop);
                            roll();
                        }
                    }, 3000);
                })
        }
        roll();


    }])