app.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('login', {url: '/login', templateUrl: 'templates/login.html', controller: 'LoginCtrl'})
    .state('dashboard', {url: '/dashboard', templateUrl: 'templates/dashboard.html', controller: 'DashboardCtrl'})
    //Embarques
    .state('embarques-activos', {url: '/embarques/activos', templateUrl: 'templates/embarques/activos.html', controller: 'EmbarquesCtrl'})
    .state('embarques-historial', {url: '/embarques/historial', templateUrl: 'templates/embarques/historial.html', controller: 'EmbarquesCtrl'})
    //Clientes
    .state('clientes-lista', {url: '/clientes/lista', templateUrl: 'templates/clientes/lista.html', controller: 'ClientesCtrl'})
});

app.constant('CONFIG', {
  API: 'http://congelados-delfin.arcanite24.c9users.io/api/'
});
