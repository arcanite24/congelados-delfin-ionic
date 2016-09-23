app.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('login', {url: '/login', templateUrl: 'templates/login.html', controller: 'LoginCtrl'})
    .state('dashboard', {url: '/dashboard', templateUrl: 'templates/dashboard.html', controller: 'DashboardCtrl'})
});

app.constant('CONFIG', {
  API: 'http://congelados-delfin.arcanite24.c9users.io/api/'
});
