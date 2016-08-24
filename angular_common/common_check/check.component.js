angular.module('app')
    .component('appCheck', {
        templateUrl: 'check.tpl.html',
        bindings: {
            val: '=',
            title: '@'
        },
        controller: function () {
            var self = this;
            this.changeCheck = function () {
                self.val = !self.val;
            }
        }
    })