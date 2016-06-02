import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  actions: {
    sendMessage(fromAddress, fromName, message) {
      return this.get('ajax').post('/send-message', {
        data: {
          fromAddress: fromAddress,
          fromName: fromName,
          message: message
        }
      });
    }
  }
});
