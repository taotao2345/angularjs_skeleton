(function() {
  'use strict';

  function HogeController(ExampleEvents, ExampleService) {
    var vm = this;

    function activate() {
      vm.apiData = ExampleService.getExample().query();
    }

    activate();

    function refreshTableData(condition) {
      vm.apiData = ExampleService.getExample().query(condition);
    }
    emitter.on(ExampleEvents.refreshTableData, refreshTableData);
  }

  HogeController.$inject = ['ExampleEvents', 'ExampleService'];

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
    .directive('myDataTable', myHoge);
})();
