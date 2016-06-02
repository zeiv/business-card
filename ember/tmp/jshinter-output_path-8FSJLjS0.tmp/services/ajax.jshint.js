QUnit.module('JSHint | services/ajax.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'services/ajax.js should pass jshint.\nservices/ajax.js: line 1, col 8, \'Ember\' is defined but never used.\n\n1 error');
});
