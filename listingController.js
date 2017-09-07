angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.code = undefined;
    $scope.name = undefined;
    $scope.latitude = undefined;
    $scope.longitude = undefined;
    $scope.address = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.newItem = {
          "code": $scope.code,
          "name": $scope.name,
          "coordinates": {
              "latitude": $scope.latitude,
              "longitude": $scope.longitude
          },
          "address": $scope.address
      };
      if($scope.code && $scope.name) {
          $scope.listings.push($scope.newItem);
      }
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
      $scope.detailedInfo = undefined;
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = index;
    };
  }
]);