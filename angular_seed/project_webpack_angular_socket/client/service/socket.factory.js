import angular from 'angular';
import io from 'socket.io-client';
import '../app/app.config';

angular.module('app')
.factory('appSocket',['$rootScope', 'config', function($rootScope, config){
    var socket = io.connect(config.socketConnect);
    return {
        on: function(eventName, callback){
            socket.on(eventName, callback);
        },
        emit: function(eventName, data) {
            socket.emit(eventName, data);
        }
    }
}])