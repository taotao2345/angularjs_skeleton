(function() {
  'use strict';

  function MySearchFormController(ExampleEvents) {
    var vm = this;

    vm.data = 'hoge';

    function activate() {
      vm.condition = {
        query: 'hoge'
      };
    }

    activate();

    vm.refreshTableData = function() {
      emitter.emit(ExampleEvents.refreshTableData, vm.condition);
    };

  }

  MySearchFormController.$inject = ['ExampleEvents'];

  function mySearchForm() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/mySearchForm.html',
      controller: MySearchFormController,
      controllerAs: 'vm',
      scope: {},
      bindToController: true
    };

    return directive;
  }

  angular
    .module(appName)
    .directive('mySearchForm', mySearchForm);
})();
