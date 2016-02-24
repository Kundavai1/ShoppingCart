/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../services/productservice.ts" />
/// <reference path="shoppingcartcontroller.ts" />


module shoppingCart.controllers {
    export class StoreController {



        static $inject = ["$scope", "$routeParams", "ShoppingFactory"];

        constructor(private $scope: any, private $routeParams: ng.route.IRouteParamsService, private shoppingFactory: any) {

            $scope.store = shoppingFactory.store;
            $scope.cart = shoppingFactory.cart;

            var _self = this;
            this.shoppingFactory.store.getProducts().then((responce) => {
                $scope.store.products = responce.data[1];

            }, (error) => {
                console.log(error.message);
            });


            if (_self.$routeParams["productSku"] != null) {
                this.shoppingFactory.store.getProduct(_self.$routeParams["productSku"]).then((responce) => {
                    $scope.product = responce.data;

                }, (error) => {
                    console.log(error.message);
                });

            }

        }

    }

    angular.module("shoppingCart").service("shoppingCart.controllers.storeController", StoreController);

} 
