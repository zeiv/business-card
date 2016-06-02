define('card/tests/helpers/resolver', ['exports', 'card/resolver', 'card/config/environment'], function (exports, _cardResolver, _cardConfigEnvironment) {

  var resolver = _cardResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _cardConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _cardConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});