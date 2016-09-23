app.controller('LoginCtrl', function($scope, $state, $http, $rootScope, CONFIG) {

  $scope.login = function (data) {
    $http.post(CONFIG.API + 'user/login', {
      username: data.username,
      password: data.password
    }).success(function(data) {
      console.log(data);
      if (data.token) {
        $rootScope._user = data.user;
        $rootScope.token = data.token;
        $rootScope.logeado = true;
        // TODO: Agregar toast para los estados del login AGREGAR EL PLUGIN "Toastr", esta en el web
        $state.go('dashboard');
      } else {
        // TODO: Cambiar mensaje por toast
        $scope.badLogin = true;
        setTimeout(function () {
          $scope.badLogin = false;
        }, 3000);
      }
    }).error(function (err) {
      console.log(err);
    });
  }

});
