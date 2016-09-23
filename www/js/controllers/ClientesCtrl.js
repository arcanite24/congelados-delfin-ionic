app.controller('ClientesCtrl', function($scope, $state, $http, CONFIG) {

  $scope.getAllClientes = function () {
    $http.get(CONFIG.API + 'cliente').success(function(data) {
      $scope.clientes = data;
    }).catch(function(err) {
      console.log(err);
    });
  }

});
