angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  // Create a blank object to store our form information
  $scope.link = {};
  // should have link.url from html

    $scope.addLink = function() {
      if ($scope.link.url) {
        Links.addLink($scope.link)
          .then(function(response) {
            $scope.loading = false;
            return response;
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    };
});
