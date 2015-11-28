angular.module('app',[])
.controller('appCtrl', ['$scope',function($scope){
         $scope.level1 = [
             {team1: 'aaaa1', team2: 'bbbb1', score1: '2', score2:'1'},
             {team1: 'cccc1', team2: 'dddd1', score1: '3', score2:'0'},
             {team1: 'eeee1', team2: 'ffff1', score1: '2', score2:'1'},
             {team1: 'gggg1', team2: 'hhhh1', score1: '1', score2:'2'},
             {team1: 'aaaa2', team2: 'bbbb2', score1: '2', score2:'1'},
             {team1: 'cccc2', team2: 'dddd2', score1: '3', score2:'0'},
             {team1: 'eeee2', team2: 'ffff2', score1: '2', score2:'1'},
             {team1: 'gggg2', team2: 'hhhh2', score1: '1', score2:'2'}
         ]

        $scope.level2 = [
            {team1: 'aaaa1', team2: 'cccc1', score1: '2', score2:'1'},
            {team1: 'eeee1', team2: 'hhhh1', score1: '2', score2:'1'},
            {team1: 'aaaa2', team2: 'dddd2', score1: '2', score2:'1'},
            {team1: 'eeee2', team2: 'hhhh2', score1: '2', score2:'1'}
        ]

        $scope.level3 = [
            {team1: 'aaaa1', team2: 'hhhh1', score1: '2', score2:'1'},
            {team1: 'aaaa2', team2: 'hhhh2', score1: '2', score2:'1'}
        ]

        $scope.level4 = [
            {team1: 'aaaa1', team2: 'hhhh2', score1: '2', score2:'1'},
        ]
        $scope.active = 1;
        $scope.getTop = function(index){
            if(index==($scope.active+1)) {
                return { 'top': '45px' };
            } else if((index - $scope.active -1) == 1 ) {
                return { 'top': '135px' };
            }  else if((index - $scope.active -1) == 2 ) {
                return { 'top': '180px' };
            } else {
                return { 'top': '0px' };
            }

        }

        $scope.getbottom = function(index){
            if(index==($scope.active+1)) {
                return  '120px';
            } else if((index - $scope.active -1) == 1 ) {
                return  '300px';
            }  else if((index - $scope.active -1) == 2 ) {
                return  '480px';
            } else {
                return  '30px';
            }
        }

        $scope.getTailHeight = function(index) {
            if(index==($scope.active+1)) {
                return  '2';
            } else if((index - $scope.active -1) == 1 ) {
                return  '3';
            }  else if((index - $scope.active -1) == 2 ) {
                return  '4';
            } else {
                return  '1';
            }
        }
    }])
.directive('matchBox',function(){
       return {
           restrict: 'E',
           replace: true,
           templateUrl: 'template/demo.matchbox.template.html',
           scope: {
               score1: '@',
               score2: '@',
               team1: '@',
               team2: '@',
               getbottom : '@',
               gettailheight : '@'
           },
           link:function(scope,ele,attr){

           }
       }
    });