(function() {
  'use strict';

  function ExampleService($resource) {
    return {
      getExample: function() {
        return $resource('data/example.json', {}, {
          query: {
            method: 'GET',
            params: {},
            isArray: true
          }
        });
      }
    };
  }

  ExampleService.$inject = ['$resource'];

  angular
    .module(appName)
    .service('ExampleService', ExampleService);
})();
