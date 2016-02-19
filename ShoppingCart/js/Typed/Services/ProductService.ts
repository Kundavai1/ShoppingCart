module shoppingCart.Services {
    export class ProductService implements shoppingCart.Interfaces.IProductService {
        httpService: ng.IHttpService
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }
        products: Array<shoppingCart.Models.Product> = [
            new shoppingCart.Models.Product("APL", "Apple", "Eat one every day to keep the doctor away!", 2, 1, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("AVC", "Avocado", "Guacamole anyone?", 16, 90, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("BAN", "Banana", "These are rich in Potassium and easy to peel.", 4, 120, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("CTP", "Cantaloupe", "Delicious and refreshing.", 3, 50, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("FIG", "Fig", "OK, not that nutritious, but sooo good!", 10, 100, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("GRF", "Grapefruit", "Pink or red, always healthy and delicious.", 11, 50, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("GRP", "Grape", "Wine is great, but grapes are even better.", 8, 100, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("GUA", "Guava", "Exotic, fragrant, tasty!", 8, 50, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("KIW", "Kiwi", "These come from New Zealand.", 14, 90, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("LYC", "Lychee", "Unusual and highly addictive!", 18, 125, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("MAN", "Mango", "Messy to eat, but well worth it.", 8, 70, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("ORG", "Orange", "Vitamin C anyone? Go ahead, make some juice.", 9, 70, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("PAP", "Papaya", "Super-popular for breakfast.", 5, 60, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("PCH", "Peach", "Add some cream and enjoy.", 19, 70, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("PER", "Pear", "Delicious fresh, or cooked in red wine, or distilled.", 8, 100, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("PMG", "Pomegranate", "Delicious, healthy, beautiful, and sophisticated!", 19, 110, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("PNP", "Pineapple", "Enjoy it (but don't forget to peel first).", 4, 60, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("PSM", "Persimmon", "Believe it or not, they are berries!", 6, 120, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("STR", "Strawberry", "Beautiful, healthy, and delicious.", 7, 40, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("TNG", "Tangerine", "Easier to peel than oranges!", 8, 50, new shoppingCart.Models.Nutrients()),
            new shoppingCart.Models.Product("WML", "Watermelon", "Nothing comes close on those hot summer days.", 4, 90, new shoppingCart.Models.Nutrients()),

        ];

        getProducts = () => {
            //this.httpService.get('getdAta').then(
            return this.products;
        };
        getProduct = (productCode: string) => {

            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].sku == productCode)
                    return this.products[i];
            }
            return null;
        };
    }
} 