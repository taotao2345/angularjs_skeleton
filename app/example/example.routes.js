(function() {
  'use strict';

  angular
    .module('app.example', [
      'app.example.controller',
      'app.example.service',
      'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/example');
        $stateProvider
          .state('example', {
            url: '/example',
            views: {
              '@': {
                templateUrl: 'partials/example.html',
                controller: 'ExampleController',
                controllerAs: 'vm'
              }
            }
          })
          .state('otherwise', {
            url: '/example'
          });
      }
    ]);
})();
