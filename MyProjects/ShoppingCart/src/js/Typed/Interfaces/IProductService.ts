module shoppingCart.Interfaces {

    export interface IProductService {
        getProducts: () => ng.IPromise<Array<shoppingCart.Models.Product>>;
        getProduct: (productCode: string) => ng.IPromise<shoppingCart.Models.Product>;

    }
} 
