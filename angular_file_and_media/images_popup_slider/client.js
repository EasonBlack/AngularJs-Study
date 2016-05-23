import $ from 'jquery'
import angular from 'angular'

import 'angular-sanitize'
import '../../vendor/ngDialog'

angular.module('app', ['ngSanitize', 'ngDialog'])
    .controller('MainController', ['$scope', 'ngDialog', function ($scope, ngDialog) {
        $scope.showImage = ()=> {
            ngDialog.open({
                template: 'index.popup.html',
                controller: 'PopUpController',
                closeByDocument: false
            });
        }
    }])
    .controller('PopUpController',['$scope', function ($scope) {
          $scope.items = [
              {id: 1,src:'../../images/sample_1.png'},
              {id: 2,src:'../../images/sample_2.png'},
              {id: 3,src:'../../images/sample_1.png'}
          ]
          $scope.current = 0;
          $scope.currentPosition =0;
          $scope.move = (num)=>{
              $scope.current = $scope.current + num;
              $scope.currentPosition = -400*($scope.current) + 'px';
          }
    }])


