var shoppingCart;
(function (shoppingCart) {
    var Services;
    (function (Services) {
        var ProductService = (function () {
            function ProductService($http) {
                var _this = this;
                this.$http = $http;
                this.dvaCaption = [];
                this.dvaRange = [];
                this.getProducts = function () {
                    return _this.$http.get('/products/');
                };
                this.getProduct = function (productCode) {
                    return _this.$http.get('/products/' + productCode);
                };
                this.dvaCaption = [
                    "Negligible",
                    "Low",
                    "Average",
                    "Good",
                    "Great"
                ];
                this.dvaRange = [
                    "below 5%",
                    "between 5 and 10%",
                    "between 10 and 20%",
                    "between 20 and 40%",
                    "above 40%"
                ];
            }
            ProductService.$inject = ["$http"];
            return ProductService;
        })();
        Services.ProductService = ProductService;
        function factory($http) {
            return new ProductService($http);
        }
        angular
            .module("shoppingCart")
            .factory("ProductService", factory);
    })(Services = shoppingCart.Services || (shoppingCart.Services = {}));
})(shoppingCart || (shoppingCart = {}));
//# sourceMappingURL=productservice.js.map
