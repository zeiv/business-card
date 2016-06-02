define('card/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'card/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _cardConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_cardConfigEnvironment['default'].APP.name, _cardConfigEnvironment['default'].APP.version)
  };
});