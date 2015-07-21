(function() {
  'use strict';

  angular
    .module('app.example.service', [
      'ngResource'
    ])
    .service('ExampleService', ExampleService);

  function ExampleService($resource) {
    return {
      getExample: getExample
    };

    function getExample() {
      return $resource('example.json', {}, {
        query: {
          method: 'GET',
          params: {},
          isArray: true
        }
      });
    }
  }
})();
