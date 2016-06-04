import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    Ember.run.scheduleOnce('afterRender', this, 'googleRecaptcha');
  },

  googleRecaptcha: function() {
    grecaptcha.render(this.$('div.g-recaptcha')[0], {sitekey: this.get('sitekey')});
  }
});
