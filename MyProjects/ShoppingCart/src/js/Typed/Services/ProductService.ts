module shoppingCart.Services {
    export class ProductService implements shoppingCart.Interfaces.IProductService {
        static $inject = ["$http"];

        dvaCaption: any = [];
        dvaRange: any = [];
        constructor(private $http: ng.IHttpService) {

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
        getProducts = () => {
            return this.$http.get('/products/');
        };

        getProduct = (productCode: string) => {
            return this.$http.get('/products/' + productCode);
        };
    }

    function factory($http: any): ProductService {
        return new ProductService($http);
    }
    angular
        .module("shoppingCart")
        .factory("ProductService",
        factory);


} 
