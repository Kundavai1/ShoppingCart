module shoppingCart.Interfaces {

    export interface IProductService {
        getProducts: () => Array<shoppingCart.Models.Product>;
        getProduct: (productCode: string) => shoppingCart.Models.Product;

    }
} 