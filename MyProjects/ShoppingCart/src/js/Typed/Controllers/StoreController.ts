/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

module shoppingCart.controllers {
    export class StoreController {
        static $inject = ["$scope,$routeParams"];
        constructor($scope: ng.IScope, $routeParams: ng.route.IRouteParamsService) {
        }
    }

    angular.module("shoppingCart").controller("shoppingCart.controllers.storeController", StoreController);

} 