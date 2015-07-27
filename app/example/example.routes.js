(function() {
  'use strict';

  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/example');
    $stateProvider
      .state('example', {
        url: '/example',
        views: {
          '@': {
            templateUrl: 'partials/example.html'
          }
        }
      })
      .state('otherwise', {
        url: '/example'
      });
  }

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  angular
    .module(appName)
    .config(routeConfig);

  function runExample($rootScope) {
    $rootScope.userId = 'hoge';
  }

  runExample.$inject = ['$rootScope'];

  angular
    .module(appName)
    .run(runExample);
})();
