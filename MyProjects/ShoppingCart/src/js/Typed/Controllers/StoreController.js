/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../services/productservice.ts" />
/// <reference path="shoppingcartcontroller.ts" />
var shoppingCart;
(function (shoppingCart) {
    var controllers;
    (function (controllers) {
        var StoreController = (function () {
            function StoreController($scope, $routeParams, shoppingFactory) {
                this.$scope = $scope;
                this.$routeParams = $routeParams;
                this.shoppingFactory = shoppingFactory;
                $scope.store = shoppingFactory.store;
                $scope.cart = shoppingFactory.cart;
                var _self = this;
                this.shoppingFactory.store.getProducts().then(function (responce) {
                    $scope.store.products = responce.data[1];
                }, function (error) {
                    console.log(error.message);
                });
                if (_self.$routeParams["productSku"] != null) {
                    this.shoppingFactory.store.getProduct(_self.$routeParams["productSku"]).then(function (responce) {
                        $scope.product = responce.data;
                    }, function (error) {
                        console.log(error.message);
                    });
                }
            }
            StoreController.$inject = ["$scope", "$routeParams", "ShoppingFactory"];
            return StoreController;
        })();
        controllers.StoreController = StoreController;
        angular.module("shoppingCart").service("shoppingCart.controllers.storeController", StoreController);
    })(controllers = shoppingCart.controllers || (shoppingCart.controllers = {}));
})(shoppingCart || (shoppingCart = {}));
//# sourceMappingURL=StoreController.js.map
