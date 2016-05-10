import $ from 'jquery'
import angular from 'angular'

import 'angular-sanitize'

angular.module('app', ['ngSanitize'])
    .controller('MainController', ['$scope', function ($scope) {
        var pointRadius = 15;
        var naturalHeight, naturalWidth, clientHeight, clientWidth;
        $scope.getPosition = (e)=> {
            e.preventDefault();
            e.stopPropagation();
            naturalHeight = e.target.naturalHeight;
            naturalWidth = e.target.naturalWidth;
            clientHeight = e.target.clientHeight;
            clientWidth = e.target.clientWidth;

            $scope.top = e.offsetY;
            $scope.left = e.offsetX;

            $scope.nativetop = (naturalHeight * $scope.top) / clientHeight;
            $scope.nativeleft = ( naturalWidth * $scope.left) / clientWidth;

            $scope.top -=pointRadius;
            $scope.left -=pointRadius;
            $scope.nativetop -=pointRadius;
            $scope.nativeleft -=pointRadius;

            console.log($scope.top,$scope.left,$scope.nativetop,$scope.nativeleft)
            console.log(e);

        }
    }])


