/// <reference path="../../scripts/typings/angularjs/es6-promise.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
((): void=> {
    var app = angular.module("shoppingCart", ['ngRoute']);
    app.config(shoppingCart.Routes.configureRoutes);
})() 