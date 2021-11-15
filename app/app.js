var app = angular.module('universeApp', ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider
        .when("/", {
            url: "/",
            templateUrl: "./app/views/layout/template2.html",
            controller: "views.home.index"
        })

        .when("/tables", {
            url: "/tables",
            templateUrl: "./app/views/layout/tables.html"
        })

        .when("/charts", {
            url: "/charts",
            templateUrl: "./app/views/layout/charts.html"
        })

        .when("/401", {
            url: "/401",
            templateUrl: "./app/views/layout/401.html"
        })

        .when("/404", {
            url: "/404",
            templateUrl: "./app/views/layout/404.html"
        })

        .when("/500", {
            url: "/500",
            templateUrl: "./app/views/layout/500.html"
        })

        .when("/login", {
            url: "/login",
            templateUrl: "./app/views/layout/login.html"
        })

        .when("/register", {
            url: "/register",
            templateUrl: "./app/views/layout/register.html"
        })

        .when("/password", {
            url: "/password",
            templateUrl: "./app/views/layout/password.html"
        })

        .when("/settings", {
            url: "/settings",
            templateUrl: "./app/views/layout/template2.html"
        })

        .when("/log", {
            url: "/log",
            templateUrl: "./app/views/layout/template2.html"
        })

        .when("/logout", {
            url: "/logout",
            templateUrl: "./app/views/layout/template2.html"
        })

        .otherwise({
            redirectTo: "/"
        });
});