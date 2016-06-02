define('card/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    ajax: _ember['default'].inject.service(),
    actions: {
      sendMessage: function sendMessage(fromAddress, fromName, message) {
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
});