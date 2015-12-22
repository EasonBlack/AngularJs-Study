(function(){
    var myApp = angular.module("app");
    myApp.config(["$translateProvider", function ($translateProvider) {
        $translateProvider.translations("en", myApp.labels_en);
        $translateProvider.translations("ch", myApp.labels_ch);
        $translateProvider.preferredLanguage("ch");
    }]);
}());