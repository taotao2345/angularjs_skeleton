(function() {
  'use strict';

  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/example');
    $stateProvider
      .state('example', {
        url: '/example',
        views: {
          '@': {
            templateUrl: 'list.html'
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

  function runBlock($rootScope) {
    $rootScope.userId = 'hoge';
  }

  runBlock.$inject = ['$rootScope'];

  angular
    .module(appName)
    .run(runBlock);
})();
