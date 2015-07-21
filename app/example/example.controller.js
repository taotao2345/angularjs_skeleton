(function() {
  'use strict';

  angular
    .module('app.example.controller', [
      'ui.router'
    ])
    .controller('ExampleController', ExampleController);

  function ExampleController(ExampleService) {
    var vm = this;

    activate();

    function activate() {
      vm.examples = ExampleService.getExample().query();
    }
  }
})();
