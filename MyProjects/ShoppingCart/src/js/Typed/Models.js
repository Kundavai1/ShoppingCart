var shoppingCart;
(function (shoppingCart) {
    var Models;
    (function (Models) {
        var Product = (function () {
            function Product(sku, name, description, price, cal, nutrients) {
                this.sku = sku; // product code (SKU = stock keeping unit)
                this.name = name;
                this.description = description;
                this.price = price;
                this.cal = cal;
                this.nutrients = nutrients;
            }
            return Product;
        })();
        Models.Product = Product;
        var Nutrients = (function () {
            function Nutrients(carotenoid, vitaminC, folates, potassium, fiber) {
                this.Carotenoid = carotenoid;
                this.vitaminC = vitaminC;
                this.Folates = folates;
                this.Potassium = potassium;
                this.Fiber = fiber;
            }
            return Nutrients;
        })();
        Models.Nutrients = Nutrients;
        var CartItem = (function () {
            function CartItem(sku, name, price, quantity) {
                this.sku = sku;
                this.name = name;
                this.price = price * 1;
                this.quantity = quantity * 1;
            }
            return CartItem;
        })();
        Models.CartItem = CartItem;
    })(Models = shoppingCart.Models || (shoppingCart.Models = {}));
})(shoppingCart || (shoppingCart = {}));
//# sourceMappingURL=Models.js.map
