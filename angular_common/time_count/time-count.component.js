angular.module('app')
    .directive('timeCount', ['TimeService',function (TimeService) {
        return {
            restrict: 'E',
            scope: {
                action: '@',
                time: '@'
            },
            template: '<div>00:00:00</div>',
            link: function(scope, element){
                var isCounting = false;
                function showTime(){
                    var timeText = recodeTime(TimeService.time.h) + ":" + recodeTime(TimeService.time.m) + ":" + recodeTime(TimeService.time.s);
                    element.html(timeText)
                }

                function checkTime() {
                    console.log(123);
                    TimeService.time.s++;
                    if (TimeService.time.s >= 60) {
                        TimeService.time.m++
                        TimeService.time.s = 0;
                    }
                    if (TimeService.time.m >= 60) {
                        TimeService.time.h++;
                        TimeService.time.m = 0;
                    }
                    showTime(TimeService.time);
                }

                function recodeTime(s) {
                    if (s < 10) {
                        return '0' + s;
                    } else {
                        return s;
                    }
                }

                function reset() {
                    TimeService.time = {
                        h: 0,
                        m: 0,
                        s: 0
                    };
                    showTime();
                }

                scope.$watch('action',function(o){
                    if(o == 'start') {
                        if (!isCounting) {
                            isCounting = true;
                            timeoutId = setInterval(checkTime, 1000);
                        }
                    } else if(o=='stop'){
                        if (isCounting) {
                            isCounting = false;
                            clearTimeout(timeoutId);
                        }
                    } else if(o=='reset') {
                        reset();
                    }
                })


            }
        }

    }])