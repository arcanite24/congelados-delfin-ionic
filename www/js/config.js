app.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('login', {url: '/login', templateUrl: 'templates/login.html', controller: 'LoginCtrl'})
    .state('dashboard', {url: '/dashboard', templateUrl: 'templates/dashboard.html', controller: 'DashboardCtrl'})
    //Embarques
    .state('embarques-activos', {url: '/embarques/activos', templateUrl: 'templates/embarques/activos.html', controller: 'EmbarquesCtrl'})
});

app.constant('CONFIG', {
  API: 'http://congelados-delfin.arcanite24.c9users.io/api/'
});
