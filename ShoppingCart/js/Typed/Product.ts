module shoppingCart.Models {
    export class Product {
        public sku: string;
        public name: string;
        public description: string;
        public price: number;
        public cal: number;
        public nutrients: Nutrients;

        constructor(sku: string, name: string, description: string, price: number, cal: number, nutrients: Nutrients) {
            this.sku = sku; // product code (SKU = stock keeping unit)
            this.name = name;
            this.description = description;
            this.price = price;
            this.cal = cal;
            this.nutrients = nutrients;
        }


    }
    export class Nutrients {

        public Carotenoid: string;
        public vitavminC: string;
        public Folates: string;
        public Potassium: string;
        public Fiber: string;
    }
    export class CartItem {
        public sku: string;
        public name: string;
        public price: number;
        public quantity: number;


        constructor(sku: string, name: string, price: number, quantity: number) {
            sku = sku;
            name = name;
            price = price * 1;
            quantity = quantity * 1;
        }
    }
}

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