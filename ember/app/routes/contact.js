import Ember from 'ember';
import Ladda from "npm:ladda";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  actions: {
    sendMessage(fromAddress, fromName, message) {
      var laddaButton = Ladda.create( document.querySelector( '.ladda-button' ) );
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
        console.log(response);
        this.transitionTo('contact/success');
      }).catch(function(error) {
        console.error(error);
        laddaButton.stop();
        Ember.$(':input').prop('disabled', false);
      });
    }
  }
});
