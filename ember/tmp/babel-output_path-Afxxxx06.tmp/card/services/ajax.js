define('card/services/ajax', ['exports', 'ember', 'ember-ajax/services/ajax'], function (exports, _ember, _emberAjaxServicesAjax) {
  exports['default'] = _emberAjaxServicesAjax['default'].extend({
    namespace: '/api/v1',
    host: 'http://localhost:8080'
  });
});