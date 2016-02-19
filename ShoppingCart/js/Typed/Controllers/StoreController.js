/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
var shoppingCart;
(function (shoppingCart) {
    var controllers;
    (function (controllers) {
        var StoreController = (function () {
            function StoreController($scope, $routeParams) {
            }
            StoreController.$inject = ["$scope,$routeParams"];
            return StoreController;
        })();
        controllers.StoreController = StoreController;
        angular.module("shoppingCart").controller("shoppingCart.controllers.storeController", StoreController);
    })(controllers = shoppingCart.controllers || (shoppingCart.controllers = {}));
})(shoppingCart || (shoppingCart = {}));
//# sourceMappingURL=StoreController.js.map