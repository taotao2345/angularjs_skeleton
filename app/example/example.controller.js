(function() {
  'use strict';

  function ExampleController() {
    var vm = this;

    vm.list = [{
      name: '1'
    }, {
      name: '2'
    }];
  }

  ExampleController.$inject = [];

  angular
    .module(appName)
    .controller('ExampleController', ExampleController);
})();
