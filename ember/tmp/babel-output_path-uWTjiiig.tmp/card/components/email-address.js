define('card/components/email-address', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    prefix: _ember['default'].computed('prefix', function () {
      return this.get('prefix');
    }),
    domain: _ember['default'].computed('domain', function () {
      return this.get('domain');
    })
  });
});