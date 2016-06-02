define('card/router', ['exports', 'ember', 'card/config/environment'], function (exports, _ember, _cardConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _cardConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('experience');
    this.route('contact');
  });

  exports['default'] = Router;
});