import Ember from 'ember';
import Ladda from "npm:ladda";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  actions: {
    sendMessage(fromAddress, fromName, message) {
      var laddaButton = Ladda.create( document.querySelector( '.ladda-button' ) );
      var self = this;
      const flashMessages = this.get('flashMessages');
      laddaButton.start();
      Ember.$(':input').prop('disabled', true);
      const ajax = this.get('ajax');
      return ajax.post('/send-message', {
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
          fromAddress: fromAddress,
          fromName: fromName,
          message: message,
          grecaptchaToken: grecaptcha.getResponse(window.grecaptchaWidgetId)
        })
      }).then(function(response) {
        laddaButton.stop();
        self.transitionTo('success');
      }).catch(function(error) {
        Ember.Logger.debug(error);
        grecaptcha.reset(window.grecaptchaWidgetId);
        laddaButton.stop();
        flashMessages.alert('Error: ' + error.message, {
          timeout: 5000,
          extendedTimeout: 500
        });
        Ember.$(':input').prop('disabled', false);
      });
    }
  }
});
