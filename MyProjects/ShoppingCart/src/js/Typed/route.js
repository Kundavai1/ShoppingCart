/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
var shoppingCart;
(function (shoppingCart) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.
                when('/store', {
                templateUrl: 'partials/store.htm',
                controller: shoppingCart.controllers.StoreController
            }).
                when('/products/:productSku', {
                templateUrl: 'partials/product.htm',
                controller: shoppingCart.controllers.StoreController
            }).
                when('/cart', {
                templateUrl: 'partials/shoppingCart.htm',
                controller: shoppingCart.controllers.StoreController
            }).
                otherwise({
                redirectTo: '/store'
            });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    shoppingCart.Routes = Routes;
})(shoppingCart || (shoppingCart = {}));
//# sourceMappingURL=route.js.map