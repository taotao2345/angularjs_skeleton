(function() {
  'use strict';

  function HogeController(ExampleService) {
    var vm = this;

    vm.apiData = ExampleService.getExample().query();
  }

  HogeController.$inject = ['ExampleService'];

  function myHoge() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/hoge.html',
      controller: HogeController,
      controllerAs: 'vm',
      scope: {},
      bindToController: true
    };

    return directive;
  }

  angular
    .module(appName)
    .directive('myHoge', myHoge);
})();
