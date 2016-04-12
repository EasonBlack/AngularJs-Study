import angular from 'angular';
import io from 'socket.io-client';

angular.module('app')
.factory('appSocket',['$rootScope', function($rootScope){
    var socket = io.connect('http://localhost:3000');
    return {
        on: function(eventName, callback){
            socket.on(eventName, callback);
        },
        emit: function(eventName, data) {
            socket.emit(eventName, data);
        }
    }
}])