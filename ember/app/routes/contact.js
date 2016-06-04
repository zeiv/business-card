import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  actions: {
    sendMessage(fromAddress, fromName, message) {
      return this.get('ajax').post('/send-message', {
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
          fromAddress: fromAddress,
          fromName: fromName,
          message: message,
          grecaptchaToken:  grecaptcha.getResponse()
        })
      });
    }
  }
});
