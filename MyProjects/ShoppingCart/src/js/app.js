'use strict';

// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
var storeApp = angular.module('AngularStore', ['ngRoute', 'ngMockE2E']).
  config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
          when('/store', {
              templateUrl: 'partials/store.htm',
              controller: storeController
          }).
          when('/products/:productSku', {
              templateUrl: 'partials/product.htm',
              controller: storeController
          }).
          when('/cart', {
              templateUrl: 'partials/shoppingCart.htm',
              controller: storeController
          }).
          otherwise({
              redirectTo: '/store'
          });
  }]);

// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
storeApp.run(function ($httpBackend, DataService) {
    // Below line is to pass request for view templates.
    $httpBackend.whenGET(/partials\/.*/).passThrough();

    // When a get is made on an url matching the regex ... 

    $httpBackend.whenGET(/products\/\w+$/)
   .respond(function (method, url, params) {

       // Retrieve the asked id as integer ...
       var re = /.*\/products\/(\w+)/;
       var productCode = url.replace(re, '$1');

       for (var i = 0; i < DataService.store.products.length; i++) {
           if (DataService.store.products[i].sku == productCode)
               return [200, DataService.store.products[i]];
       }
       return [404];

   });
})
.factory("DataService", ['$http', function ($http) {

    // create store
    var myStore = new store($http);

    // create shopping cart
    var myCart = new shoppingCart("AngularStore");

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
}]);
