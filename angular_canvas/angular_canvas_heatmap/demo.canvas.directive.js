angular.module('app')
    .directive('myCanvas', ['$timeout','pointList', function($timeout,pointList){

        var self = this;

        return {
            restrict: 'E',
            scope : {
                pic: '='
            },
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

                scope.$on('imgPlus',function(event){
                    var wspan = 1 * originWidth*0.25;
                    var hspan = 1 * originHeight*0.25;
                    handleImg(wspan, hspan);
                });

                scope.$on('imgMinus',function(event){
                    var wspan = -1 * originWidth*0.25;
                    var hspan = -1 * originHeight*0.25;
                    handleImg(wspan, hspan);
                });


                function handleImg(wspan, hspan) {
                    $('#imgsvg').css('width', parseInt($('#imgsvg').width()) + wspan);
                    $('#imgsvg').css('height', parseInt($('#imgsvg').height()) + hspan);
                    canvas.width = canvas.width + wspan;
                    canvas.height = canvas.height + hspan;
                    var w_rate =  canvas.width / originWidth;
                    var h_rate =   canvas.height/ originHeight;
                    pointList.resetAxis(w_rate,h_rate);
                }


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