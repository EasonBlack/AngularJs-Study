import '../view1/view1.module';

angular.module('app', [
    'view1Module'
])
    .config(function (view11ServiceProvider) {
        view11ServiceProvider.setMessage('World');
    })