var myApplication = angular.module('myApplication', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/first',
            {
                templateUrl:'views/first.html',
                controller:'controller1'
            });
        $routeProvider.when('/second',
            {
                templateUrl:'views/second.html',
                controller:'controller2'
            });
    });