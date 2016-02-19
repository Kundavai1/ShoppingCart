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
            function Nutrients() {
            }
            return Nutrients;
        })();
        Models.Nutrients = Nutrients;
        var CartItem = (function () {
            function CartItem(sku, name, price, quantity) {
                sku = sku;
                name = name;
                price = price * 1;
                quantity = quantity * 1;
            }
            return CartItem;
        })();
        Models.CartItem = CartItem;
    })(Models = shoppingCart.Models || (shoppingCart.Models = {}));
})(shoppingCart || (shoppingCart = {}));
//function product(sku, name, description, price, cal, carot, vitc, folate, potassium, fiber) {
//    this.sku = sku; // product code (SKU = stock keeping unit)
//    this.name = name;
//    this.description = description;
//    this.price = price;
//    this.cal = cal;
//    this.nutrients = {
//        "Carotenoid": carot,
//        "Vitamin C": vitc,
//        "Folates": folate,
//        "Potassium": potassium,
//        "Fiber": fiber
//    };
//}  
//# sourceMappingURL=Product.js.map