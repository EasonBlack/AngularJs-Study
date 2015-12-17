angular.module('app')
    .directive('myCanvas', ['$timeout','pointList', function($timeout,pointList){

        var self = this;

        return {
            restrict: 'E',
            templateUrl: 'demo.canvas.directive.template.html',
            link: function(scope,ele,attr){

                var canvas = document.getElementById('canvas');
                var originWidth = canvas.width;
                var originHeight = canvas.height;
                var ctx = canvas.getContext('2d');
                var timeouts = [];

                scope.$on('initCanvas',function(event,data){
                    console.log(data);
                    var datalen = data.length;
                    pointList.init(data);
                    console.log(pointList.max);

                });

                scope.$on('drawSpeed',function(event,speed){
                    pointList.setSpeed(speed);
                    drawHeatMap();
                });

                scope.$on('drawPause',function(event){
                    pauseAndClear();
                });

                scope.$on('drawPlay',function(event){
                    drawHeatMap(pointList.currentIndex);
                });

                function pauseAndClear(){
                    for (var i = 0; i < timeouts.length; i++) {
                        clearTimeout(timeouts[i]);
                    }
                    timeouts = [];
                }


                function drawHeatMap(currentIndex) {
                    if(!currentIndex) currentIndex = 0;
                    var heat = simpleheat('canvas');
                    heat.radius(15,25);   //radius , blur
                    totalCount  = pointList.stepsLen;
                    for(var i= currentIndex,ilen=pointList.stepsLen;i<ilen;i++){
                        (function(index, tindex) {
                            timeouts.push(setTimeout(function(){
                                var _dataSet = pointList.getOneLayerValue(index);
                                heat.data(_dataSet).max(pointList.max);
                                heat.draw();
                            },tindex*pointList.time));
                        })(i, i - currentIndex);
                    }
                }
            }
        }
    }]);