define('card/app', ['exports', 'ember', 'card/resolver', 'ember-load-initializers', 'card/config/environment'], function (exports, _ember, _cardResolver, _emberLoadInitializers, _cardConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _cardConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _cardConfigEnvironment['default'].podModulePrefix,
    Resolver: _cardResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _cardConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});