var app = angular.module('universeApp', ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider
        .when("/home", {
            templateUrl: "app/views/layout/template.html",
            controller: "homeController"
        })
        .otherwise({
            redirectTo: "/home"
        });
});
