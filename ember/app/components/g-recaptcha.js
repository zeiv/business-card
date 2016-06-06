import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    Ember.run.scheduleOnce('afterRender', this, 'googleRecaptcha');
  },

  willDestroyElement() {
    Ember.run.scheduleOnce('destroy', this, 'resetRecaptcha');
  },

  googleRecaptcha: function() {
    if ($('iframe').length === 0) {
      let widgetId = grecaptcha.render(this.$('div.g-recaptcha')[0], {sitekey: this.get('sitekey')});
      this.set('grecaptchaId', widgetId);
      window.grecaptchaWidgetId = widgetId;
    }
  },

  resetRecaptcha: function() {
    grecaptcha.reset(this.get('grecaptchaId'));
  }
});
