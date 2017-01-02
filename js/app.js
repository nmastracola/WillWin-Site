angular.module('willWin', ['ui.router', 'ui.materialize', 'angular.vertilize', 'slickCarousel'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/home.html"
            }).state('about',{
                url:'/about',
                templateUrl: "../views/about.html",
                controller: 'aboutCtrl'
            }).state('contact',{
                url:'/contact',
                templateUrl: "../views/contact.html",
                controller: 'contactCtrl'
            }).state('services', {
                url: '/services',
                templateUrl: "../views/services.html",
                controller: 'serviceCtrl'
            }).state('facilities',{
                url: '/facilities',
                templateUrl: "../views/facilities.html",
                controller: "facilCtrl"
        });

        $urlRouterProvider
            .otherwise('/');
    });