define('card/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'card/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _cardConfigEnvironment) {

  var name = _cardConfigEnvironment['default'].APP.name;
  var version = _cardConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});