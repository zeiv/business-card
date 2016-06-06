import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition: function() {
      var delay = 1500;
      var self = this;
      setTimeout(function() {
        self.transitionTo('index');
      }, delay);
    }
  }
});
