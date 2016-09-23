app.controller('EmbarquesCtrl', function($scope, $state, $http, CONFIG) {

  $scope.loadEmbarquesActivos = function () {
    $http.get(CONFIG.API + 'embarque/getActivos').then(function (data) {
      $scope.embarques = data.data;
    }).catch(function (err) {
      console.log('ERROR: /api/embarque/getActivos', err);
    });
  }

});
