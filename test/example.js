var assert = require('assert');
var App = require('../dist/class').App;
describe('array', function() {
  it('should do something', function() {
    assert.equal(1, 1);
  });
  it('should do something else', function() {
    var a = new App('What is my name');
    a.doIt('Whaaaa?');
  });
});

