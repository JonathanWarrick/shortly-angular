angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.sorting = '-$scope.data.links.visits';
  $scope.getLinks = Links.getLinks;
  $scope.getLinks()
  .then(function(links) {
    $scope.data.links = links;
  })
  .catch(function(err) {
    console.error(err);
  });
});
