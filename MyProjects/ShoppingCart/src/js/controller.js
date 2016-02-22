'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
function storeController($scope, $routeParams, DataService) {

    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    // use routing to pick the selected product
    if ($routeParams.productSku != null) {
        $scope.store.getProduct($routeParams.productSku).then(function (responce) {
            $scope.product = responce.data;
        }, function (error) {
            if (error.status == 404) {
                alert('Not found');
            } else
                alert('Error occured');
        });
    }
}
