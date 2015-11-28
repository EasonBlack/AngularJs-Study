angular.module('app',['ngFileUpload'])
.controller('appMainCtrl',['$scope','$timeout', 'Upload', function($scope,$timeout, Upload){
        $scope.settings = {
            on_design :  false,
            on_play : false
        }
        $scope.pic = {
            difference: []
        }

        $scope.loadImage = function(){
            $scope.settings.on_play = true;

            angular.forEach()
            $scope.pic.difference;
        }

    }])
    .directive('differenceSpot',function(){
        return {
            restrict : 'E',
            replace: true,
            scope : {
                x :'=',
                y :'='
            },
            template: '<div class="difference_target nothing" style="position:absolute;"></div>',
            link : function(scope , ele, attrs){
               ele.css('left', (scope.x+ 25 - 5)+ 'px');
               ele.css('top', (scope.y+ 25 - 5)+ 'px');
               ele.click(function(){
                   ele.removeClass('nothing');
                   ele.css('left', (scope.x)+ 'px');
                   ele.css('top', (scope.y)+ 'px');
               });
            }
        }
    })
.directive('createDifference',function(){
       return {
           restrict : 'A',
           scope: {
               point : '=',
               ondesign : '='
           },
           link: function(scope,ele,attrs){

               ele.click(function(e){
                   if(!scope.ondesign){return false;}

                   var _offsetX = e.pageX - ele.offset().left - 25;
                   var _offsetY = e.pageY - ele.offset().top - 25;
                   scope.point.push({x: _offsetX, y : _offsetY});

                   var _dom = angular.element("<div class='difference' style='top:"+_offsetY+"px;left:"+_offsetX+"px'></div>");
                   _dom.hide();
                   ele.append(_dom);
                   _dom.show('slow','swing');
               })
           }
       }
    });