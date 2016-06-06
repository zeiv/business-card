import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import ENV from 'card/config/environment';

var host;

if (ENV.environment === 'production') {
  host = undefined;
} else {
  host = 'http://localhost:8080';
}

export default AjaxService.extend({
  namespace: '/api/v1',
  host: host
});
