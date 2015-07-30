'use strict';

var emitter = new EventEmitter2({
  wildcard: false,
  maxListeners: 50
});

var appName = 'example';
angular
  .module('example', [
    'ngResource',
    'ui.router',
    'events.example'
  ]);
