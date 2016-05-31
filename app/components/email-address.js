import Ember from 'ember';

export default Ember.Component.extend({
  prefix: Ember.computed('prefix', function() {
    return this.get('prefix');
  }),
  domain: Ember.computed('domain', function() {
    return this.get('domain');
  })
});
