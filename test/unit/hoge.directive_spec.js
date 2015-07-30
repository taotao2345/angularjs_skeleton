'use strict'

describe('HogeController', function() {

  beforeEach(module('example'));

  it('sample test', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('HogeController', {
    });

    //asset.equals(1, 1);
  }));

});
