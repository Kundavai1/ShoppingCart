/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
module shoppingCart {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.
                when('/store', {
                    templateUrl: 'Views/store.htm',
                    controller: shoppingCart.controllers.StoreController
                }).
                when('/products/:productSku', {
                    templateUrl: 'Views/product.htm',
                    controller: shoppingCart.controllers.StoreController

                }).
                when('/cart', {
                    templateUrl: 'Views/shoppingCart.htm',
                    controller: shoppingCart.controllers.StoreController

                }).
                otherwise({
                    redirectTo: '/store'
                });
        }

    }
} 
