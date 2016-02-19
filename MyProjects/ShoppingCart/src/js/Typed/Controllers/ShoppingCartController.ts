/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
module shoppingCart.controllers {

    export class ShoppingCartController {
        static $inject = ["$scope", "shoppingCart.Models.CartItem"];
        // save items to local storage when unloading
        constructor($scope: ng.IScope, cartItem: shoppingCart.Models.CartItem) {
        }

        cartName: string;
        clearCart: boolean = false;
        checkoutParameters: any = {};
        items: shoppingCart.Models.CartItem;

        // load items from local storage when initializing
        loadItems = () => {

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
        checkout = function (serviceName, clearCart) {

            // select serviceName if we have to
            if (serviceName == null) {
                var p = this.checkoutParameters[Object.keys(this.checkoutParameters)[0]];
                serviceName = p.serviceName;
            }

            // sanity
            if (serviceName == null) {
                throw "Use the 'addCheckoutParameters' method to define at least one checkout service.";
            }

            // go to work
            var parms = this.checkoutParameters[serviceName];
            if (parms == null) {
                throw "Cannot get checkout parameters for '" + serviceName + "'.";
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


    angular.module("shoppingCart").controller("shoppingCart.controllers.ShoppingCartController", ShoppingCartController);
}