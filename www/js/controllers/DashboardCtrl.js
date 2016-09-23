app.controller('DashboardCtrl', function($scope, $state, $http, CONFIG) {

  $scope.getProximosPagos = function () {
    $http.get(CONFIG.API + 'embarque/getActivos').then(function (data) {
      console.log(data);
      $scope.proximosPagos = data.data;
    }).catch(function (err) {
      console.log('ERROR: /api/embarque/ GET', err);
    });
  }

  $scope.getClientesActivos = function () {
    $http.get(CONFIG.API + 'cliente').then(function (data) {
      $scope.clientesActivos = data.data;
    }).catch(function (err) {
      console.log('ERROR: /api/cliente/ GET', err);
    });
  }

  $scope.getFechaPago = function (fechaInicial) {
    var startDate = new Date(Date.parse(fechaInicial));
    var todayDate = new Date();
    var dm = startDate.getMonth() - todayDate.getMonth();
    startDate.setMonth(startDate.getMonth() + dm + 1);
    return startDate;
  }

});
