import angular from  'angular'
import uuid from 'node-uuid';

angular.module('app', [])
    .controller('appCtrl', ['$scope', '$http', 'userService', function ($scope, $http, User) {


        var init = ()=> {
               var user = new User({name: 'eeee', num: '123'});
               var user2 = new User();
               $scope.text = user.getName();
               $scope.text2 = user2.getName();
        }

        init();
    }])
    .factory('userService', function () {
        var User = function (obj) {
            var self = this;
            this.initialize = function () {
                self = Object.assign(self, obj);
            };

            this.getName = function(){
                return self.name || 'xxxxxx';
            }
            this.initialize();
        }

        return User;
    })

