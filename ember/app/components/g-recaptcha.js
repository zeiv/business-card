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
      console.log('Setting model.grecaptchaId to ' + widgetId);
      console.log(this.get('grecaptchaId'));
      window.grecaptchaWidgetId = widgetId;
    }
  },

  resetRecaptcha: function() {
    console.log('Resetting reCaptcha');
    console.log(this.get('grecaptchaId'));
    grecaptcha.reset(this.get('grecaptchaId'));
  }
});
