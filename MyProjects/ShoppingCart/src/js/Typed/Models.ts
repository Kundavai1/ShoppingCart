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

        public Carotenoid: number;
        public vitaminC: number;
        public Folates: number;
        public Potassium: number;
        public Fiber: number;

        constructor(carotenoid: number, vitaminC: number, folates: number, potassium: number, fiber: number) {
            this.Carotenoid = carotenoid;
            this.vitaminC = vitaminC;
            this.Folates = folates;
            this.Potassium = potassium;
            this.Fiber = fiber;
        }


    }
    export class CartItem {
        public sku: string;
        public name: string;
        public price: number;
        public quantity: number;


        constructor(sku: string, name: string, price: number, quantity: number) {
            this.sku = sku;
            this.name = name;
            this.price = price * 1;
            this.quantity = quantity * 1;
        }
    }
}
 
