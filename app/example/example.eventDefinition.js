(function() {
  'use strict';

  function ExampleEvents() {
    var events = {
      refreshTableData: 'refreshTableData'
    };

    return events;
  }

  angular
    .module('events.example', [])
    .factory('ExampleEvents', ExampleEvents);

})();
