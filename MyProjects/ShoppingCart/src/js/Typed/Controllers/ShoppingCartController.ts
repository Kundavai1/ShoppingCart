/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
module shoppingCart.controllers {

    export class ShoppingCartController {

        constructor() {

            var self = this;
            $(window).unload(() => {
                if (self.clearCart) {
                    self.clearItems();
                }
                self.saveItems();
                self.clearCart = false;
            });
            self.loadItems();
        }

        cartName: string = "shoppingCart";
        clearCart: boolean = false;
        items: shoppingCart.Models.CartItem[] = [];
        
        // load items from local storage when initializing
        loadItems = () => {
            var items = localStorage != null ? localStorage[this.cartName + "_items"] : null;
            if (items != null && JSON != null) {
                try {
                    var items = JSON.parse(items);
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if (item.sku != null && item.name != null && item.price != null && item.quantity != null) {
                            item = new shoppingCart.Models.CartItem(item.sku, item.name, item.price, item.quantity);
                            this.items.push(item);
                        }
                    }
                }
                catch (err) {
                    // ignore errors while loading...
                }
            }
        };


        // save items to local storage
        saveItems = function () {
            if (localStorage != null && JSON != null) {
                localStorage[this.cartName + "_items"] = JSON.stringify(this.items);
            }
        }

        // adds an item to the cart
        addItem = function (sku, name, price, quantity) {
            quantity = this.toNumber(quantity);
            if (quantity != 0) {

                // update quantity for existing item
                var found = false;
                for (var i = 0; i < this.items.length && !found; i++) {
                    var item = this.items[i];
                    if (item.sku == sku) {
                        found = true;
                        item.quantity = this.toNumber(item.quantity + quantity);
                        if (item.quantity <= 0) {
                            this.items.splice(i, 1);
                        }
                    }
                }

                // new item, add now
                if (!found) {
                    item = new shoppingCart.Models.CartItem(sku, name, price, quantity);
                    this.items.push(item);
                }

                // save changes
                this.saveItems();
            }
        }

        // get the total price for all items currently in the cart
        getTotalPrice = function (sku) {
            var total = 0;
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                if (sku == null || item.sku == sku) {
                    total += this.toNumber(item.quantity * item.price);
                }
            }
            return total;
        }

        // get the total price for all items currently in the cart
        getTotalCount = function (sku) {
            var count = 0;
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                if (sku == null || item.sku == sku) {
                    count += this.toNumber(item.quantity);
                }
            }
            return count;
        }

        // clear the cart
        clearItems = function () {
            this.items = [];
            this.saveItems();
        }

        

        // check out
        checkout = function (clearCart) {

            if (clearCart) {

                this.clearItems();
                var random = Math.random().toString();
                alert("Order sucessfully placed with Id:" + random.substr(1, 7));
                location.href = "defaultTyped.html#/store";
            }

        }

        // utility methods
        addFormFields = function (form, data) {
            if (data != null) {
                $.each(data, function (name, value) {
                    if (value != null) {
                        var input = $("<input></input>").attr("type", "hidden").attr("name", name).val(value);
                        form.append(input);
                    }
                });
            }
        }
        toNumber = function (value) {
            value = value * 1;
            return isNaN(value) ? 0 : value;
        }


    }


    angular.module("shoppingCart").controller("ShoppingCartController", ShoppingCartController);
}
